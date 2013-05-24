# Jekyll v1 made internal markdown converters.
# Here we change the module, allowing our custom parser to be used.
module Jekyll
  module Converters
    class Markdown < Converter
      safe true

      pygments_prefix "\n"
      pygments_suffix "\n"

      def setup
        return if @setup
        @parser = case @config['markdown']
        when 'redcarpet'
          RedcarpetParser.new @config
        when 'kramdown'
          KramdownParser.new @config
        when 'rdiscount'
          RDiscountParser.new @config
        when 'maruku'
          MarukuParser.new @config
        when 'redcarpet-pygments' # Hi! I'm a custom parser
          RedcarpetPygmentsParser.new @config
        else
          STDERR.puts "Invalid Markdown processor: #{@config['markdown']}"
          STDERR.puts " Valid options are [ maruku | rdiscount | kramdown | redcarpet-pygments ]"
          raise FatalException.new("Invalid Markdown process: #{@config['markdown']}")
        end
        @setup = true
      end

      def matches(ext)
        rgx = '(' + @config['markdown_ext'].gsub(',','|') +')'
        ext =~ Regexp.new(rgx, Regexp::IGNORECASE)
      end

      def output_ext(ext)
        ".html"
      end

      def convert(content)
        setup
        @parser.convert(content)
      end
    end
  end
end

# Jekyll Parser as required in v1.
# Providing support for line numbering.
module Jekyll
  module Converters
    class Markdown
      class RedcarpetPygmentsParser
        def initialize(config)
          require 'redcarpet'
          require 'pygments'

          @config = config
          @redcarpet_extensions = {}
          @config['redcarpet']['extensions'].each { |e| @redcarpet_extensions[e.to_sym] = true }

          @renderer ||= Class.new(Redcarpet::Render::HTML) do
            def block_code(code, lang)
              lang = lang && lang.split.first || "text"
              colorized = Pygments.highlight(code, :lexer => lang, :options => {:lineanchors => "line"}) # Add lineanchors for line numbers
              colorized.sub(/<pre>/, "<pre><code class=\"#{lang}\">").sub(/<\/pre>/, "</code></pre>")
            end

            def codespan(code)
              "<code class=\"inline-code\">#{code}</code>" # Inline code custom class
            end 
          end
        rescue LoadError
          STDERR.puts 'You are missing a library required for Markdown. Please run:'
          STDERR.puts '  $ [sudo] gem install redcarpet'
          raise FatalException.new("Missing dependency: redcarpet")
        end

        def convert(content)
          @redcarpet_extensions[:fenced_code_blocks] = !@redcarpet_extensions[:no_fenced_code_blocks]
          @renderer.send :include, Redcarpet::Render::SmartyPants if @redcarpet_extensions[:smart]
          markdown = Redcarpet::Markdown.new(@renderer.new(@redcarpet_extensions), @redcarpet_extensions)
          markdown.render(content)
        end
      end
    end
  end
end
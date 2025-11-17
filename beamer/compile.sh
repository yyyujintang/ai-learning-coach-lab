#!/bin/bash

# Compilation script for Beamer presentation
# Makes it easy to compile and clean up auxiliary files

echo "🎓 Compiling Beamer presentation..."
echo "===================================="
echo ""

# Check if pdflatex is installed
if ! command -v pdflatex &> /dev/null
then
    echo "❌ Error: pdflatex not found!"
    echo "Please install LaTeX:"
    echo "  macOS: brew install --cask mactex"
    echo "  Linux: sudo apt-get install texlive-full"
    echo "  Or use Overleaf: https://www.overleaf.com/"
    exit 1
fi

# Compile the presentation (run twice for proper references)
echo "📄 First pass..."
pdflatex -interaction=nonstopmode presentation.tex > /dev/null 2>&1

echo "📄 Second pass..."
pdflatex -interaction=nonstopmode presentation.tex > /dev/null 2>&1

# Check if compilation was successful
if [ -f "presentation.pdf" ]; then
    echo ""
    echo "✅ Success! Presentation compiled successfully!"
    echo ""
    echo "📊 Output: presentation.pdf"
    echo ""
    
    # Get file size
    SIZE=$(du -h presentation.pdf | cut -f1)
    echo "📦 File size: $SIZE"
    
    # Count pages
    PAGES=$(pdfinfo presentation.pdf 2>/dev/null | grep Pages | awk '{print $2}')
    if [ ! -z "$PAGES" ]; then
        echo "📖 Total slides: $PAGES"
    fi
    
    echo ""
    echo "🎬 Ready to present!"
    echo ""
    
    # Ask if user wants to open the PDF
    read -p "Open PDF now? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]
    then
        if [[ "$OSTYPE" == "darwin"* ]]; then
            open presentation.pdf
        elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
            xdg-open presentation.pdf
        else
            echo "Please open presentation.pdf manually"
        fi
    fi
    
    # Ask about cleanup
    echo ""
    read -p "Clean up auxiliary files? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]
    then
        rm -f *.aux *.log *.nav *.out *.snm *.toc *.vrb
        echo "🧹 Auxiliary files cleaned!"
    fi
    
else
    echo ""
    echo "❌ Compilation failed!"
    echo "Check presentation.log for errors"
    echo ""
    echo "Common issues:"
    echo "  - Missing LaTeX packages (install texlive-full)"
    echo "  - Syntax errors in .tex file"
    echo "  - Missing fontawesome5 package"
    echo ""
    exit 1
fi

echo ""
echo "===================================="
echo "All done! 🎉"


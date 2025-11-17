# Beamer Presentation - AI Learning Coach Lab

## Overview

This folder contains a professional LaTeX Beamer presentation for your COSC 267 HCI Final Project.

## Presentation Contents

### Structure (30-35 slides)

1. **Introduction (3 slides)**
   - Project overview
   - Research context
   - Project scope

2. **Three Prototypes (9 slides)**
   - Overview comparison table
   - Default Path (detailed + analysis)
   - Co-Creation Path (detailed + analysis)
   - Explainable Path (detailed + analysis)

3. **Comparative Analysis (3 slides)**
   - Design trade-offs triangle
   - User experience dimensions
   - When to use each prototype

4. **Research Questions (2 slides)**
   - Primary research questions
   - Potential user study design

5. **Technical Implementation (2 slides)**
   - System architecture
   - Code quality & scalability

6. **Demonstration (2 slides)**
   - Live demo structure
   - Demo scenarios

7. **Conclusion (3 slides)**
   - Key takeaways
   - Future work
   - Project impact

8. **Backup Slides**
   - References
   - Additional materials

## How to Compile

### Option 1: Using pdflatex (Recommended)

```bash
cd beamer
pdflatex presentation.tex
pdflatex presentation.tex  # Run twice for proper references
```

### Option 2: Using latexmk (Automated)

```bash
cd beamer
latexmk -pdf presentation.tex
```

### Option 3: Using Online Editor

1. Go to [Overleaf](https://www.overleaf.com/)
2. Create a new project
3. Upload `presentation.tex`
4. Compile online

### Option 4: Using VSCode with LaTeX Workshop

1. Install "LaTeX Workshop" extension
2. Open `presentation.tex`
3. Press `Ctrl/Cmd + Alt + B` to build

## Requirements

### LaTeX Packages Needed:
- beamer (main presentation class)
- graphicx (for images)
- booktabs (for tables)
- tikz (for diagrams)
- fontawesome5 (for icons)
- xcolor (for colors)
- hyperref (for links)

Most LaTeX distributions (TeXLive, MiKTeX) include these by default.

### Installing LaTeX:

**macOS:**
```bash
brew install --cask mactex
```

**Linux:**
```bash
sudo apt-get install texlive-full
```

**Windows:**
Download and install [MiKTeX](https://miktex.org/)

## Presentation Features

✅ **Professional Design**
- Madrid theme with seahorse color scheme
- Custom colors matching web app
- Clean, academic style

✅ **Visual Elements**
- TikZ diagrams for system architecture
- Comparison tables
- Trade-off triangles
- Flow charts

✅ **Rich Content**
- 45 learning activities highlighted
- Three prototype comparison
- Research questions framework
- Technical implementation details

✅ **Interactive Elements**
- References to live demo
- Multiple demo scenarios
- Question slides

## Presentation Tips

### Duration
- Full presentation: **20-25 minutes**
- With demo: **25-30 minutes**
- Q&A: **5-10 minutes**

### Slide Timing Guide
- Title slide: 30 seconds
- Each content slide: 1-2 minutes
- Demo slides: 5-8 minutes
- Conclusion: 2-3 minutes

### Recommended Flow

1. **Start Strong (3 min)**
   - Introduce the problem
   - Show the three prototypes overview
   - State research questions

2. **Deep Dive (12 min)**
   - Explain each prototype (4 min each)
   - Show strengths/weaknesses
   - Demonstrate use cases

3. **Analysis (5 min)**
   - Compare trade-offs
   - Discuss design decisions
   - Present research framework

4. **Demo (8 min)**
   - Live demonstration of all three
   - Show real interactions
   - Highlight key differences

5. **Conclude (2 min)**
   - Summarize key findings
   - Discuss future work
   - Open for questions

## Customization

### Changing Colors

Edit the custom color definitions:
```latex
\definecolor{defaultColor}{RGB}{107, 114, 128}
\definecolor{coCreationColor}{RGB}{59, 130, 246}
\definecolor{explainableColor}{RGB}{245, 158, 11}
```

### Adding Your Name

Update the author field:
```latex
\author{Your Name\\COSC 267 - Human-Computer Interaction}
```

### Adjusting Content

- Each `\begin{frame}...\end{frame}` is one slide
- Modify text, add bullets, or remove sections as needed
- Keep technical details in backup slides

## Output Files

After compilation, you'll get:
- `presentation.pdf` - The final presentation
- `presentation.aux` - Auxiliary file
- `presentation.log` - Compilation log
- `presentation.nav` - Navigation helper
- `presentation.out` - PDF bookmarks
- `presentation.snm` - ??? helper
- `presentation.toc` - Table of contents

You only need the **PDF file** for presentation!

## Troubleshooting

### Error: Missing package
```bash
# Install missing packages (MiKTeX)
mpm --install <package-name>

# Or use tlmgr (TeXLive)
tlmgr install <package-name>
```

### Error: fontawesome5 not found
```bash
# Install fontawesome5
tlmgr install fontawesome5
```

### Compilation takes too long
- Use `pdflatex -interaction=nonstopmode presentation.tex`
- Or switch to Overleaf for cloud compilation

### Icons not showing
- Make sure fontawesome5 is installed
- Alternatively, replace `\faIcon` commands with text emojis

## Presentation Modes

### Presenter Mode (with notes)
Add notes to slides:
```latex
\note{This is a speaker note}
```

### Handout Mode (for printing)
Change document class:
```latex
\documentclass[handout,aspectratio=169]{beamer}
```

### Article Mode (for paper)
```latex
\documentclass{article}
\usepackage{beamerarticle}
```

## Export Options

### To PowerPoint
Use Overleaf's "Download as PowerPoint" feature, or:
```bash
pdf2pptx presentation.pdf
```

### To PNG/Images
```bash
pdftoppm presentation.pdf slide -png
```

### To Video
Record your presentation with:
- Zoom screen recording
- OBS Studio
- QuickTime (macOS)

## Quick Reference

### Useful Beamer Commands

```latex
\pause                    % Pause before next item
\only<2->{content}        % Show only on slides 2+
\alert{text}              % Highlight text
\textbf{text}            % Bold
\textit{text}            % Italic
\textcolor{color}{text}  % Colored text
```

### Adding New Slides

```latex
\begin{frame}{Slide Title}
Your content here
\end{frame}
```

## Final Checklist

Before presentation:
- [ ] Compile successfully
- [ ] Check all slides render correctly
- [ ] Test on presentation computer
- [ ] Verify colors look good on projector
- [ ] Print handouts if needed
- [ ] Prepare backup (USB + cloud)
- [ ] Test live demo separately
- [ ] Time your presentation

## Resources

- [Beamer User Guide](https://ctan.org/pkg/beamer)
- [Overleaf Beamer Tutorial](https://www.overleaf.com/learn/latex/Beamer)
- [LaTeX Wikibook](https://en.wikibooks.org/wiki/LaTeX/Presentations)
- [TikZ Examples](https://texample.net/)

---

**Good luck with your presentation!** 🎓📊

Your slides are professional, comprehensive, and ready to impress! 🚀



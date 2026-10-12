# Bitcointalk 3D Chart Generator

A dedicated, standalone HTML5/JS application to generate high-resolution **3D Isometric Vertical Column Charts** directly from BitcoinTalk monthly analytics CSV files (such as `Top_active_users.csv`, `Top_board_by_post_counts.csv`, `Top_words.csv`, `Metadata_of_forum.csv`, etc.).

---

## 🚀 How to Host & Share on GitHub

### Option 1: Live Free Web App with GitHub Pages (Recommended)
You can host this directly on GitHub so anyone can use it online from a web browser without installing anything:

1. Create a repository on GitHub (e.g. `bitcointalk-chart-generator`).
2. Upload the repository files (`index.html`, `style.css`, `app.js`).
3. In your GitHub repository:
   - Go to **Settings** &rarr; **Pages** (in the left sidebar).
   - Under **Build and deployment** &rarr; **Branch**, select `main` (or `master`) and folder `/ (root)`.
   - Click **Save**.
4. GitHub will give you a live URL:
   `https://<your-username>.github.io/<repo-name>/`
   Anyone can visit that link and create charts immediately!

---

### Option 2: Single-File Standalone (`bitcointalk_3d_chart_generator.html`)
The file **`bitcointalk_3d_chart_generator.html`** is 100% self-contained (all HTML, CSS, and JavaScript are bundled together into one single file with zero external dependencies):

- **Direct Run**: Double-click this single file anywhere on Windows, macOS, or Linux to open in Chrome, Edge, Firefox, or Safari.
- **GitHub View**: Users can view and run it online via [htmlpreview.github.io](https://htmlpreview.github.io/?https://github.com/<your-username>/<repo-name>/blob/main/bitcointalk_3d_chart_generator.html).
- **Single File Distribution**: You can email or share just this single `.html` file.

---

## 🌟 Key Features

1. **Pixel-Perfect 3D Isometric Projection**:
   - Extruded 3D column blocks with lit top faces and shaded right side faces.
   - 3D ground platform/floor with receding perspective and subtle depth.
   - 24 vibrant palette colors with guaranteed contrast.

2. **🔀 Color Shuffler**:
   - One-click randomized color permutation (`🔀 Shuffle Colors`) in the toolbar, data drawer, and chart settings.
   - Ensures adjacent bars never have identical colors.

3. **Intelligent Column Detection & Limit Slicing**:
   - Automatically detects category names and metric values across complex multi-column Bitcointalk export CSVs.
   - Dynamic column selector for multi-metric tables.
   - Row limit selector (`Top 10`, `Top 15`, `Top 20`, `Top 30`, `Top 50`, `All`).

4. **Dynamic Linear & Logarithmic Scaling**:
   - "Nice numbers" algorithm for clean linear scale steps (e.g. 200, 400, 600, 800 for max 738).
   - Base-10 Logarithmic scale ($10^0$ to $10^5$) for wide-spread data.
   - Automatic scale selection based on data range.

5. **Anti-Collision Category Labels**:
   - Automatic angled labels (-35°) when labels are long or crowded.
   - Manual angle selector (`Auto`, `Horizontal`, `Slanted`, `Vertical`).

6. **Multiple Loading Modes**:
   - **Drag and Drop**: Drop any `.csv` file onto the chart viewport.
   - **File Picker**: Load from disk.
   - **Presets**: August 2026, Top Users, Top Boards, Top Words, etc.
   - **Table Editor**: Live row editing, custom color pickers, add/delete rows.

7. **Export & Sharing**:
   - **Save PNG (2x HD)**: Crisp 2200x1200 image.
   - **Save SVG**: Scalable vector graphics.
   - **Copy to Clipboard**: Instant paste into forum threads or documents.

---

## 📁 File Structure

```text
chart_generator/
├── index.html                        # Main web application entry point (GitHub Pages ready)
├── style.css                         # Modern dark-mode styling and layout
├── app.js                            # High-DPI canvas & SVG 3D chart rendering engine
├── bitcointalk_3d_chart_generator.html # 100% self-contained single-file bundle (everything in 1 file)
├── sample_data/
│   └── Metadata_of_forum.csv         # Sample data
└── README.md                         # Documentation & GitHub hosting instructions
```

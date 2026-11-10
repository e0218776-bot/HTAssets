  @page {
    size: letter portrait;
    margin: 8mm 10mm 8mm 10mm;
  }
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    color: #0f172a;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
    font-size: 11.2pt;
    line-height: 1.25;
  }
  .page {
    page-break-after: always;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .page:last-child {
    page-break-after: avoid;
    margin-bottom: 0;
  }
  .page-header {
    border-bottom: 2px solid #0f172a;
    padding-bottom: 4px;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .page-header .brand {
    font-size: 13.5pt;
    font-weight: 900;
    letter-spacing: 1.2px;
    color: #0f172a;
  }
  .page-header .category {
    font-size: 10.8pt;
    color: #64748b;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .page-footer {
    border-top: 1px solid #cbd5e1;
    padding-top: 4px;
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 10.3pt;
    color: #64748b;
    font-weight: 600;
    text-transform: uppercase;
  }
  .asset-card {
    border: 1px solid #cbd5e1;
    border-radius: 2px;
    padding: 6px;
    margin-bottom: 6px;
    background: #ffffff;
  }
  .asset-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0f172a;
    color: #ffffff;
    padding: 4px 8px;
    border-radius: 2px;
    font-size: 11.2pt;
    font-weight: 700;
    margin-bottom: 4px;
  }
  .asset-bar.new-asset {
    background-color: #0369a1;
  }
  .asset-bar .price {
    color: #38bdf8;
    font-size: 11.8pt;
  }
  .image-box-21-9 {
    width: 100%;
    aspect-ratio: 21 / 9;
    background-color: #f1f5f9;
    border: 1px solid #94a3b8;
    border-radius: 1px;
    overflow: hidden;
    margin-bottom: 4px;
  }
  .image-box-21-9 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .placeholder-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    background: repeating-linear-gradient(
      -45deg,
      #f8fafc,
      #f8fafc 12px,
      #f1f5f9 12px,
      #f1f5f9 24px
    );
    border: 1px dashed #94a3b8;
    color: #475569;
    text-align: center;
    padding: 10px;
  }
  .placeholder-box .lock-icon {
    font-size: 15pt;
    line-height: 1;
    color: #0f172a;
  }
  .placeholder-box .title {
    font-size: 10.9pt;
    font-weight: 800;
    letter-spacing: 0.8px;
    color: #0f172a;
    text-transform: uppercase;
  }
  .placeholder-box .caption {
    font-size: 9.9pt;
    font-weight: 500;
    color: #64748b;
    letter-spacing: 0.2px;
  }
  table.data-grid {
    width: 100%;
    border-collapse: collapse;
    font-size: 10.5pt;
  }
  table.data-grid th {
    background-color: #f8fafc;
    color: #334155;
    font-weight: 700;
    text-transform: uppercase;
    text-align: left;
    padding: 4px 5px;
    border-bottom: 1px solid #cbd5e1;
  }
  table.data-grid td {
    padding: 4px 5px;
    border-bottom: 1px solid #e2e8f0;
    vertical-align: top;
  }
  .col-concept { width: 17%; }
  .col-market { width: 17%; }
  .col-keys { width: 6%; }
  .col-price { width: 9%; }
  .col-cap { width: 9%; }
  .col-status { width: 7%; }
  .col-thesis { width: 35%; }
  .thesis-text {
    line-height: 1.25;
  }
  .thesis-text strong {
    color: #0f172a;
  }
  .summary-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 4px;
    font-size: 10.7pt;
  }
  .summary-table th {
    background-color: #0f172a;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    text-align: left;
    padding: 5px 7px;
    border: 1px solid #0f172a;
  }
  .summary-table td {
    padding: 5px 7px;
    border: 1px solid #cbd5e1;
  }
  .summary-table tr:nth-child(even) {
    background-color: #f8fafc;
  }
  .summary-table tr.total-row {
    background-color: #e2e8f0;
    font-weight: 800;
  }
  .protocol-box {
    margin-top: 8px;
    padding: 6px 8px;
    background-color: #f1f5f9;
    border-left: 3px solid #0f172a;
    font-size: 10.5pt;
    color: #334155;
    line-height: 1.35;
  }

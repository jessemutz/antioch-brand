import * as React from 'react';

const DownloadButton = ({ children: title, ...props }) => {
  return (
    <div class="download">
      <a
        href={props.href}
        class="download-link"
        aria-label={`Download ${title}`}
        target="_blank"
        download>
        <svg class="icon" viewBox="0 0 120 120">
          <g>
            <g class="DownloadIcon">
              <path d="M72.647 53.353c-.468-.47-1.226-.47-1.697 0L61 63.303V36.2c0-.662-.538-1.2-1.2-1.2-.662 0-1.2.538-1.2 1.2v27.103l-9.95-9.95c-.47-.47-1.23-.47-1.7 0-.468.468-.468 1.226 0 1.697l12 12c.236.232.543.35.85.35.307 0 .614-.118.85-.353l12-12c.468-.468.468-1.226-.003-1.694z"></path>
              <path d="M79 75.8H40.6c-1.985 0-3.6-1.615-3.6-3.6v-4.8c0-.662.538-1.2 1.2-1.2.662 0 1.2.538 1.2 1.2v4.8c0 .662.538 1.2 1.2 1.2H79c.662 0 1.2-.538 1.2-1.2v-4.8c0-.662.538-1.2 1.2-1.2.662 0 1.2.538 1.2 1.2v4.8c0 1.985-1.615 3.6-3.6 3.6z"></path>
            </g>
          </g>
        </svg>
        <div class="description">
          <h4 class="title">{title}</h4>
          <p>{props.description}</p>
        </div>
      </a>
    </div>
  );
};

export default DownloadButton;

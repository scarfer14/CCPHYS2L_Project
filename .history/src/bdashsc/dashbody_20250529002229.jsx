.dashboard-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  align-items: flex-start;
}

/* Common row wrapper */
.row {
  display: flex;
  gap: 10px;
  width: 100%;
  flex-wrap: nowrap;
}

/* Common tab style */
.tab {
  background-color: #fdeec7;
  border: 2px solid #111;
  color: #000;
  font-family: monospace;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Tab headers */
.tab-header {
  background-color: #f4a1c8;
  color: #000;
  padding: 6px 10px;
  font-size: 12px;
  text-align: left;
}

.tab-header1 {
  background-color: #a285b9;
  color: #000;
  padding: 6px 10px;
  font-size: 12px;
  text-align: left;
}

.tab > *:not(.tab-header):not(.tab-header1) {
  padding: 8px;
  flex: 1;
}

/* Specific tab sizes */
.fun-fact {
  width: 250px;
  height: 120px;
}

.multimedia {
  width: 250px;
  height: 120px;
}

.folders {
  width: 174px;
  height: 203px;
}

.image {
  width: 70px;
  height: 93px;
}

.physics-problem {
  width: 46px;
  height: 56px;
  font-size: 8px;
}

.fun-fact-2 {
  width: 46px;
  height: 33px;
  font-size: 8px;
}

.calculator {
  width: 119px;
  height: 103px;
}

/* Iframe full height inside its tab */
.multimedia iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Folder buttons */
.folders button {
  display: block;
  margin: 5px 0;
  width: 100%;
  background: #333;
  border: 1px solid #000000;
  color: #aaffaa;
  padding: 6px;
  font-size: 10px;
  cursor: pointer;
  font-family: monospace;
}

/* Image styling */
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: pixelated;
}

import html from "html-literal";

export default () => html`
  <body>
    <div class="stats-container">
      <div class="grid">
        <div class="graph-box">Graph 1 - chart.js - use</div>
        <div class="graph-box">Graph 2</div>
        <div class="graph-box">Graph 3</div>
        <div class="graph-box">Graph 4</div>
      </div>
      <div class="menu-box">
        <div class="header-container">
          <h3>Graphs</h3>
          <br/>
          <br/>
          <div>
            <input type="radio" id="st_radio_1" name="st_radio" value="radio 1" />
            <label for="st_radio_1">radio 1</label
            ><br />
            <input type="radio" id="st_radio_2" name="st_radio" value="radio 2" />
            <label for="st_radio_2">radio 2</label
            ><br />
            <input  type="radio" id="st_radio_3" name="st_radio" value="radio 3"
            />
            <label for="st_radio_3">radio 3</label>
          </div>
        </div>
        <div class="header-container">
          <h3>Habits</h3>
          <br/>
          <br/>
          <div>
            <input type="radio" id="st_radio_1" name="st_radio2" value="radio 1" />
            <label for="st_radio_1">radio 1</label
            ><br />
            <input type="radio" id="st_radio_2" name="st_radio2" value="radio 2" />
            <label for="st_radio_2">radio 2</label
            ><br />
            <input  type="radio" id="st_radio_3" name="st_radio2" value="radio 3"
            />
            <label for="st_radio_3">radio 3</label>
          </div>

        </div>
        <div class="header-container">
          <h3>Catagories</h3>
          <br/>
          <br/>
          <div>
            <input type="radio" id="st_radio_1" name="st_radio3" value="radio 1" />
            <label for="st_radio_1">radio 1</label
            ><br />
            <input type="radio" id="st_radio_2" name="st_radio3" value="radio 2" />
            <label for="st_radio_2">radio 2</label
            ><br />
            <input  type="radio" id="st_radio_3" name="st_radio3" value="radio 3"
            />
            <label for="st_radio_3">radio 3</label>
          </div>
          <button id="addStat" onclick="addStat" class="circle-button">
          +
        </button>
        </div>
        </div>

      </div>
    </div>
  </body>
`;

import html from "html-literal";

export default () => html`
  <section id="habits">
    <div class="shared-board">
      <!-- Column 1: Categories -->
      <div class="shared-column">
        <div class="column-banner-catagories">
          <!-- Banner -->
          <div class="column-title">Catagories</div>
        </div>
        <div class="add-container">
          <div class="add-label">Add Habit</div>
          <button id="addRtn" onclick="menuRtn"  class="circle-button">+</button>
        </div>
        <div class="shared-column-cards">
          <div class="habit-card">Individual Habit</div>
          <div class="habit-card">Individual Habit</div>
          <div class="habit-card">Habit</div>
          <!-- More cards... -->
        </div>
      </div>

      <div class="shared-column">
        <div class="column-banner-habits">
          <!-- Banner -->
          <div class="column-title">Habits</div>
        </div>
        <div class="add-container">
          <div class="add-label">Add Habit</div>
          <button id="addHabit" onclick="addHabit" class="circle-button">
            +
          </button>
          <button id="addTest" onclick="addTest('one test')" class="circle-button">
          +++
        </button>
        </div>
        <div class="shared-column-cards">
          <div class="habit-card">Individual Habit</div>
          <div class="habit-card">Individual Habit</div>
          <div class="habit-card">Habit</div>
          <!-- More cards... -->
        </div>
      </div

      <!-- Column 3: Routines -->
      <div class="shared-column">
        <div class="column-banner-routines">
          <!-- Banner -->
          <div class="column-title">Routines</div>
        </div>
        <div class="add-container">
          <div class="add-label">Add Habit</div>

          <button id="addCat" onclick="menuCat" class="circle-button">+</button>
        </div>
        <div class="shared-column-cards">
          <div class="habit-card">Individual Habit</div>
          <div class="habit-card">Individual Habit</div>
          <div class="habit-card">Habit</div>
          <!-- More cards... -->
        </div>
      </div>
    </div>
    <script>
      function toggleMenu(icon) {
        const popupMenu = icon.nextElementSibling;
        popupMenu.classList.toggle("active");
      }

      document.addEventListener("click", function(event) {
        if (!event.target.classList.contains("menu-icon")) {
          const popupMenus = document.querySelectorAll(".popup-menu.active");
          for (const menu of popupMenus) {
            menu.classList.remove("active");
          }
        }
      });
    </script>
  </section>
  <div class="ed_test" id="menu_ed">


  <div class="flex-row-names">
        <div class="input-group">
            <label for="firstName">First Name <span class="required">*</span></label>
            <input class="names" type="text" id="firstName" name="firstName" required>
        </div>
        <div class="input-group">
            <label for="lastName">Last Name <span class="required">*</span></label>
            <input class="names" type="text" id="lastName" name="lastName" required>
        </div>
    </div>
    <div class="flex-row-names-vertical">
    <div class="input-group">
        <label for="email">Email <span class="required">*</span></label>
        <input class="names" type="text" id="email" name="email" required>
    </div>
    <div class="input-group">
        <label for="phone">Phone</label>
        <input class="names" type="text" id="phone" name="phone">
    </div>
    </div>
    <div class="textarea-group">
        <label for="message">Message<span class="required">*</span></span></label>
        <textarea id="message" name="message"></textarea>
    </div>
    <div class="center">
        <button id="addSavebtn" onclick="addTest" name="save">Save</button>
        <button id="button_close" onclick="myFunction">close</button>
        <button id="button_clear" onclick="clear">clear</button>

    </div>
  </div>

</div>
`;

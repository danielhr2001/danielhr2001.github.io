<script lang="ts">
export default defineComponent({
mounted(){
  const { availableLocales, locale } = useI18n();
  let nextLang  = availableLocales[(availableLocales.indexOf(locale.value) + 1) % availableLocales.length];
  document.getElementById("next-lang").innerText = `${nextLang}`;
}
});
</script>
<script setup lang="ts">
import { isDark, toggleDark } from '@/logic'

const { t, availableLocales, locale } = useI18n();

let nextLang  = availableLocales[(availableLocales.indexOf(locale.value) + 1) % availableLocales.length];

const toggleLocales = () => {
  // change to some real logic
  locale.value = nextLang;
  nextLang  = availableLocales[(availableLocales.indexOf(locale.value) + 1) % availableLocales.length];
  document.getElementById("next-lang").innerText = `${nextLang}`;
}

function dropdownSkills() {
  document.getElementById("skillDropdown").classList.toggle("show");
}
function dropdownPersonalinfo() {
  document.getElementById("personalinfoDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-skill')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-skills");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.dropbtn-personalinfo')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-personalinfo");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

</script>

<template>
  <div class="static-header-container">
    <div class="static-header">
      <div class="left-side">
        <div class="profile-img-container">
          <img id="profile-img" />
        </div>
        <div class="name-container">
          <span id="my-name">{{t('header_menus.my_name')}}</span>
        </div>
      </div>
      <div class="right-side">
        <div class="header-meun-items">
          <nav>
            <a class="header-meun-item" id="experience">
              {{t('header_menus.experience')}}
            </a>
            <div class="header-meun-item dropdown" id="skills">
              <button @click="dropdownSkills" class="dropbtn-skill dropbtn">{{t('header_menus.skills')}}<i /></button>
              <div id="skillDropdown" class="dropdown-content-skills dropdown-content">
                <a href="#">{{t('skills.soft_skills')}}</a>
                <a href="#">{{t('skills.hard_skills')}}</a>
              </div>
            </div>
            <a class="header-meun-item" id="about_me">
              {{t('header_menus.about_me')}}
            </a>
            <div class="header-meun-item dropdown" id="personal_info">
              <button @click="dropdownPersonalinfo" class="dropbtn-personalinfo dropbtn">{{t('header_menus.personal_info')}}<i /></button>
              <div id="personalinfoDropdown" class="dropdown-content-personalinfo dropdown-content">
                <a href="#">{{t('personal_info.contact_info')}}</a>
                <a href="#">{{t('personal_info.personal_info')}}</a>
                <a href="#">{{t('personal_info.employment_status')}}</a>
                <a href="#">{{t('personal_info.social_medias')}}</a>
              </div>
            </div>
            <a class="header-meun-item" id="education">
              {{t('header_menus.education')}}
            </a>
          </nav>
        </div>
        
        <div class="dark-mode-button-container">
          <button
            class="icon-btn mx-2 !outline-none"
            :title="t('button.toggle_dark')"
            @click="toggleDark()"
          >
            <carbon-moon v-if="isDark" />
            <carbon-sun v-else />
          </button>
        </div>
        <div class="lang-button-container">
          <button class="lang-button" @click="toggleLocales" id="next-lang"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.static-header-container{
  background-color: #0505AC;
  color: #FFF;
  padding: 0 10%;
  .static-header{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .left-side{
    display:flex;
    align-items: center;
    .profile-img-container{
      #profile-img{

      }
    }
    .name-container{
      #my-name{

      }
    }
  }
  .right-side{
    display:flex;
    align-items: center;
    .header-meun-items{
      nav{
        .header-meun-item{
          &:hover{
            text-decoration: underline;
          }
        }
        div{
          .dropbtn{
            &:hover{
            text-decoration: underline;
          }
          }
        }
        a{
          cursor: pointer;
        }
      }
    }
    .dark-mode-button-container{
    }
    .lang-button-container{
      .lang-button{
        outline: none;
      }
    }
  }
}

/* Dropdown Button */
.dropbtn {
  // background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
  // background-color: #2980B9;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}
</style>

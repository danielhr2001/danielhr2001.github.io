<script lang="ts">
export default defineComponent({
  mounted() {
    const { availableLocales, locale } = useI18n();
    let nextLang =
      availableLocales[
        (availableLocales.indexOf(locale.value) + 1) % availableLocales.length
      ];
    document.getElementById('next-lang').innerText = `${nextLang}`;
  },
});
</script>
<script setup lang="ts">
import {
  contact_info,
  personal,
  job_status,
  social_medias,
} from '@/logic/personalInfoTabs';
import { isDark, toggleDark } from '@/logic';

const { t, availableLocales, locale } = useI18n();

let nextLang =
  availableLocales[
    (availableLocales.indexOf(locale.value) + 1) % availableLocales.length
  ];

const toggleLocales = () => {
  // change to some real logic
  locale.value = nextLang;
  nextLang =
    availableLocales[
      (availableLocales.indexOf(locale.value) + 1) % availableLocales.length
    ];
  document.getElementById('next-lang').innerText = `${nextLang}`;
};

function dropdownSkills() {
  document.getElementById('skillDropdown').classList.toggle('show');
}
function dropdownPersonalinfo() {
  document.getElementById('personalinfoDropdown').classList.toggle('show');
}
function dropdownMenu() {
  document.getElementById('menuDropdown').style.display = 'flex';
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn-skill')) {
    var dropdowns = document.getElementsByClassName('dropdown-content-skills');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.dropbtn-personalinfo')) {
    var dropdowns = document.getElementsByClassName(
      'dropdown-content-personalinfo'
    );
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  // if(document.getElementById('menuDropdown').style.display == 'flex'){
  //   document.getElementById('menuDropdown').style.display = 'none';
  // }
};
</script>

<template>
  <div class="static-header-container">
    <div class="static-header">
      <div class="left-side">
        <div class="profile-img-container">
          <img
            id="profile-img"
            src="../../public/my-photo.svg"
            alt="My Photo"
          />
        </div>
        <div class="name-container">
          <span id="my-name">{{ t('header_menus.my_name') }}</span>
        </div>
      </div>
      <div class="right-side">
        <div class="header-meun-items">
          <nav>
            <a
              class="header-meun-item"
              href="#position-experience"
              id="experience"
            >
              {{ t('header_menus.experience') }}
            </a>
            <div class="header-meun-item dropdown" id="skills">
              <button @click="dropdownSkills" class="dropbtn-skill dropbtn">
                {{ t('header_menus.skills') }}
                <i class="ri-arrow-down-s-line"></i>
              </button>
              <div
                id="skillDropdown"
                class="dropdown-content-skills dropdown-content"
              >
                <a class="dropdown-content-item" href="#position-soft-skills">{{
                  t('skills.soft_skills')
                }}</a>
                <a class="dropdown-content-item" href="#position-hard-skills">{{
                  t('skills.hard_skills')
                }}</a>
              </div>
            </div>
            <a class="header-meun-item" href="#position-about-me" id="about_me">
              {{ t('header_menus.about_me') }}
            </a>
            <div class="header-meun-item dropdown" id="personal_info">
              <button
                @click="dropdownPersonalinfo"
                class="dropbtn-personalinfo dropbtn"
              >
                {{ t('header_menus.personal_info') }}
                <i class="ri-arrow-down-s-line"></i>
              </button>
              <div
                id="personalinfoDropdown"
                class="dropdown-content-personalinfo dropdown-content"
              >
                <a
                  class="dropdown-content-item"
                  href="#position-personal-info"
                  @click="contact_info"
                  >{{ t('personal_info.contact_info') }}</a
                >
                <a
                  class="dropdown-content-item"
                  href="#position-personal-info"
                  @click="personal"
                  >{{ t('personal_info.personal') }}</a
                >
                <a
                  class="dropdown-content-item"
                  href="#position-personal-info"
                  @click="job_status"
                  >{{ t('personal_info.job_status') }}</a
                >
                <a
                  class="dropdown-content-item"
                  href="#position-personal-info"
                  @click="social_medias"
                  >{{ t('personal_info.social_medias') }}</a
                >
              </div>
            </div>
            <a
              class="header-meun-item"
              href="#position-education"
              id="education"
            >
              {{ t('header_menus.education') }}
            </a>
          </nav>
        </div>

        <!-- <div class="dark-mode-button-container">
          <button
            class="icon-btn mx-2 !outline-none"
            :title="t('button.toggle_dark')"
            @click="toggleDark()"
          >
            <carbon-moon v-if="isDark" />
            <carbon-sun v-else />
          </button>
        </div> -->
        <div class="lang-button-container">
          <button
            class="lang-button"
            @click="toggleLocales"
            id="next-lang"
          ></button>
        </div>
        <div class="menu-icon-container">
          <button class="menu-icon-btn dropbtn" @click="dropdownMenu">
            <i class="ri-menu-line menu-icon"></i>
          </button>
          <div
            id="menuDropdown"
            class="dropdown-content-skills dropdown-content"
          >
            <a class="dropdown-content-item" href="#position-soft-skills">{{
              t('skills.soft_skills')
            }}</a>
            <a class="dropdown-content-item" href="#position-hard-skills">{{
              t('skills.hard_skills')
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.static-header-container {
  background-color: #0505ac;
  color: #fff;
  padding: 0 10%;
  position: fixed;
  width: 100%;
  z-index: 100;
  .static-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-side {
      display: flex;
      align-items: center;
      .profile-img-container {
        // overflow: hidden;
        padding: 10px;
        #profile-img {
          border-radius: 50%;
          width: auto;
          height: 4em;
        }
      }
      .name-container {
        #my-name {
        }
      }
    }
    .right-side {
      display: flex;
      align-items: center;
      .header-meun-items {
        nav {
          .header-meun-item {
            &:hover {
              text-decoration: underline;
            }
          }
          .dropdown {
            position: relative;
            display: inline-block;
            .dropbtn {
              color: white;
              padding: 16px;
              font-size: 16px;
              outline: none;
              cursor: pointer;
              display: flex;
              align-items: center;
              &:hover {
                text-decoration: underline;
              }
              .arrow-drop-down {
                font-size: 123;
              }
            }
            .dropdown-content {
              .dropdown-content-item {
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
                &:hover {
                  background-color: #ddd;
                }
              }
            }
          }
          a {
            cursor: pointer;
          }
        }
      }
      .dark-mode-button-container {
        display: flex;
        align-items: center;
      }
      .lang-button-container {
        margin-left: 0.5vw;
        .lang-button {
          padding: 0.5em;
          border-radius: 20%;
          background-color: #3c47e6;
          outline: none;
        }
      }
      .menu-icon-container {
        display: none;
        padding: 0.5em;
        .menu-icon-btn {
          &:focus {
            outline: none;
          }
          &:focus-visible {
            outline: revert;
          }
          .menu-icon {
          }
        }
      }
    }
  }
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {
  display: block;
}

@media screen and (max-width: 940px) {
  .static-header-container {
    .static-header {
      display: flex;
      justify-content: space-around;
      .right-side {
        .header-meun-items {
          nav {
            .header-meun-item {
              display: none;
            }
            #skills {
              display: none;
            }
            #personal_info {
              display: none;
            }
          }
        }
        .menu-icon-container {
          display: block;
          .menu-icon-btn {
            .menu-icon {
            }
          }
        }
      }
    }
  }
}
</style>

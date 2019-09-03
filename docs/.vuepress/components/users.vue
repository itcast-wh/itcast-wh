<template>
  <div class="vuer">
    <div class="avatar">
      <img
        v-if="profile.imageUrl"
        :src="profile.imageUrl"
        :alt="profile.name"
        width="80"
        height="80"
      />
      <img
        v-else-if="profile.github"
        :src="'https://github.com/' + profile.github + '.png'"
        :alt="profile.name"
        width="80"
        height="80"
      />
      <img
        v-else-if="profile.twitter"
        :src="'https://avatars.io/twitter/' + profile.twitter"
        :alt="profile.name"
        width="80"
        height="80"
      />
    </div>
    <div class="profile">
      <h3 :data-official-title="profile.title">
        {{ profile.name }}
        <sup v-if="profile.title && titleVisible" v-html="profile.title"></sup>
      </h3>
      <dl>
        <template v-if="profile.reposOfficial">
          <dt>Core focus</dt>
          <dd>
            <ul>
              <li v-for="repo in profile.reposOfficial">
                <a :href="githubUrl('vuejs', repo)" target="_blank">{{ repo.name || repo }}</a>
              </li>
            </ul>
          </dd>
        </template>
        <template v-if="profile.github && profile.reposPersonal">
          <dt>Ecosystem</dt>
          <dd>
            <ul>
              <li v-for="repo in profile.reposPersonal">
                <a :href="githubUrl(profile.github, repo)" target="_blank">{{ repo.name || repo }}</a>
              </li>
            </ul>
          </dd>
        </template>
        <template v-if="profile.work">
          <dt>
            <i class="fa fa-briefcase"></i>
            <span class="sr-only">Work</span>
          </dt>
          <dd v-html="workHtml"></dd>
        </template>
        <span v-if="profile.distanceInKm" class="distance">
          <dt>
            <i class="fa fa-map-marker"></i>
            <span class="sr-only">Distance</span>
          </dt>
          <dd>
            About
            <span
              v-if="profile.distanceInKm <= 150"
              :title="profile.name + ' is close enough to commute to your location.'"
              class="user-match"
            >{{ textDistance }} away</span>
            <template v-else>{{ textDistance }} away</template>
            in {{ profile.city }}
          </dd>
        </span>
        <template v-else-if="profile.city">
          <dt>
            <i class="fa fa-map-marker"></i>
            <span class="sr-only">City</span>
          </dt>
          <dd>{{ profile.city }}</dd>
        </template>
        <template v-if="profile.languages">
          <dt>
            <i class="fa fa-globe"></i>
            <span class="sr-only">Languages</span>
          </dt>
          <dd v-html="languageListHtml" class="language-list"></dd>
        </template>
        <template v-if="profile.email">
          <dt>
            <i class="fa fa-envelope"></i>
            <span class="sr-only">Email</span>
          </dt>
          <dd v-html="profile.email"></dd>
        </template>
        <template v-if="profile.links">
          <dt>
            <i class="fa fa-link"></i>
            <span class="sr-only">Links</span>
          </dt>
          <dd>
            <ul>
              <li v-for="link in profile.links">
                <a :href="link" target="_blank">{{ minimizeLink(link) }}</a>
              </li>
            </ul>
          </dd>
        </template>
        <template v-if="profile.describe">
          <dt>
            <i class="fa fa-bookmark"></i>
            <span class="sr-only">Intro</span>
          </dt>
          <dd v-html="profile.describe"></dd>
        </template>
        <footer v-if="hasSocialLinks" class="social">
          <a class="github" v-if="profile.github" :href="githubUrl(profile.github)">
            <i class="fa fa-github"></i>
            <span class="sr-only">Github</span>
          </a>
          <a
            class="twitter"
            v-if="profile.twitter"
            :href="'https://twitter.com/' + profile.twitter"
          >
            <i class="fa fa-twitter"></i>
            <span class="sr-only">Twitter</span>
          </a>
          <a class="codepen" v-if="profile.codepen" :href="'https://codepen.io/' + profile.codepen">
            <i class="fa fa-codepen"></i>
            <span class="sr-only">CodePen</span>
          </a>
          <a
            class="linkedin"
            v-if="profile.linkedin"
            :href="'https://www.linkedin.com/in/' + profile.linkedin"
          >
            <i class="fa fa-linkedin"></i>
            <span class="sr-only">LinkedIn</span>
          </a>
        </footer>
      </dl>
    </div>
  </div>
</template>

<script>
  let cityCoordsFor = {
    'Beijing, China': [39.904200, 116.407396],
    'Chengdu, China': [30.572815, 104.066801],
    'Chongqing, China': [29.431586, 106.912251],
    'Hangzhou, China': [30.274084, 120.155070],
    'Shanghai, China': [31.230390, 121.473702],
  }

  let languageNameFor = {
    en: 'English',
    zh: '中文',
  }

  export default {
    props: {
      profile: Object,
      titleVisible: Boolean
    },
    computed: {
      workHtml: function () {
        let work = this.profile.work
        let html = ''
        if (work.orgUrl) {
          html += '<a href="' + work.orgUrl + '" target="_blank" rel="noopener noreferrer">'
          if (work.org) {
            html += work.org
          } else {
            this.minimizeLink(work.orgUrl)
          }
          html += '</a>'
        } else if (work.org) {
          html += work.org
        }
        if (work.role) {
          if (html.length > 0) {
            html = work.role + ' @ ' + html
          } else {
            html = work.role
          }
        }
        return html
      },
      textDistance: function () {
        let distanceInKm = this.profile.distanceInKm || 0
        if (this.$root.useMiles) {
          return roundDistance(kmToMi(distanceInKm)) + ' miles'
        } else {
          return roundDistance(distanceInKm) + ' km'
        }
      },
      languageListHtml: function () {
        let vm = this
        /* eslint */
        let nav = window.navigator
        if (!vm.profile.languages) return ''
        let preferredLanguageCode = nav.languages
          // The preferred language set in the browser
          ? nav.languages[0]
          : (
              // The system language in IE
              nav.userLanguage ||
              // The language in the current page
              nav.language
            )
        return (
          '<ul><li>' +
          vm.profile.languages.map(function (languageCode, index) {
            let language = languageNameFor[languageCode]
            if (
              languageCode !== 'en' &&
              preferredLanguageCode &&
              languageCode === preferredLanguageCode.slice(0, 2)
            ) {
              return (
                '<span ' +
                  'class="user-match" ' +
                  'title="' +
                    vm.profile.name +
                    ' can give technical talks in your preferred language.' +
                  '"' +
                '\>' + language + '</span>'
              )
            }
            return language
          }).join('</li><li>') +
          '</li></ul>'
        )
      },
      hasSocialLinks: function () {
        return this.profile.github || this.profile.twitter || this.profile.codepen || this.profile.linkedin
      }
    },
    methods: {
      minimizeLink: function (link) {
        return link
          .replace(/^https?:\/\/(www\.)?/, '')
          .replace(/\/$/, '')
          .replace(/^mailto:/, '')
      },
      /**
       * Generate a GitHub URL using a repo and a handle.
       */
      githubUrl: function (handle, repo) {
        if (repo && repo.url) {
          return repo.url
        }
        if (repo && repo.indexOf('/') !== -1) {
          // If the repo name has a slash, it must be an organization repo.
          // In such a case, we discard the (personal) handle.
          return (
            'https://github.com/' +
            repo.replace(/\/\*$/, '')
          )
        }
        return 'https://github.com/' + handle + '/' + (repo || '')
      }
    }
  }
</script>

<style lang="scss">
@import "./styles/settings.scss";
.vuer {
  display: flex;
  padding: 25px 0;
  border-bottom: 1px dotted #ddd;
  &:first-of-type {
    margin-top: 15px;
  }
  &:last-of-type {
    border-bottom: none;
  }
  .avatar {
    flex: 0 0 80px;
    img {
      border-radius: 50%;
    }
  }
  .profile {
    padding-left: 26px;
    flex: 1;
    h3 {
      margin: 0;
      font-size: 1.3em;
      &::before,
      &::after {
        display: none;
      }

      & > sup {
        text-transform: uppercase;
        font-size: 0.7em;
        letter-spacing: 0.3px;
        padding: 2px 5px;
        margin-left: 10px;
        color: transparentify($dark, #f9f7f5, 0.6);
        background: #f9f7f5;
        border-radius: 5px;
      }
    }

    // NOTE: Removing the little signal icon for now
    // .distance
    //   position: relative
    //   &:before
    //     content: "\f1eb"
    //     font-family: FontAwesome
    //     position: absolute
    //     top: 50%
    //     margin-top: -.5em
    //     line-height: 1
    //     right: 100%
    //     transform: rotate(-90deg)
    .user-match {
      cursor: help;
      color: steelblue;
      &:after {
        content: "\f06a";
        font-family: FontAwesome;
        font-size: 0.75em;
        vertical-align: super;
        margin-left: 4px;
        margin-right: 2px;
        position: relative;
      }
    }
    dl {
      margin: 0.6em 0 0;
    }

    dt,
    dd,
    ul,
    li {
      display: inline;
      padding: 0;
      margin: 0;
      line-height: 1.3;
    }

    dt {
      text-transform: uppercase;
      font-size: 0.84em;
      font-weight: 600;
      &::after {
        content: "";
        margin-right: 7px;
      }
      i {
        width: 14px;
        text-align: center;
        &.fa-map-marker {
          font-size: 1.15em;
        }
        &.fa-globe {
          font-size: 1.2em;
        }
        &.fa-link {
          font-size: 1.05em;
        }
      }
    }

    dd {
      font-weight: 600;
      &::after {
        display: block;
        content: " ";
        margin-top: 0.6em;
      }
    }

    li {
      display: inline-block;
      &::after {
        display: inline-block;
        content: "·";
        margin: 0 8px;
      }
      &:last-child::after {
        content: "";
      }
    }

    .social {
      a {
        display: inline-block;
        line-height: 1;
        vertical-align: middle;
        margin-right: 4px;
        &.github,
        &.codepen {
          color: #000;
        }
        &.twitter {
          color: #1da1f3;
        }
        &.linkedin {
          color: #0077b5;
        }
      }

      i {
        vertical-align: text-bottom;
        font-size: 1.3em;
      }
    }
  }
}
</style>
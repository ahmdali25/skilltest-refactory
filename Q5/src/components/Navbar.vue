<template>
    <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
      <a class="navbar-brand">
        <span>Logo</span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#link-nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="link-nav">
        <ul class="navbar-nav">
          <li class="nav-user"><img src="../assets/user.png" alt=""></li>
          <li class="nav-item">Samsul Arifin</li>
          <li class="nav-settings">
            <button class="btn btn-settings"><img src="../assets/ic24-settings.png" alt=""></button>
          </li>
        </ul>
      </div>
    </nav>   
</template>

<style lang="scss" scoped>
.navbar-custom {
    height: 94px;
    background-color: #0442D0;
    a {
        span {
            color: #FFFFFF;
            font-size: 30px;
            font-weight: 700;
            line-height: 35px;
            margin-left: 24px;
        }
    }

    #link-nav {
        .navbar-nav {
            .nav-user {
                margin-top: 22px;
                margin-bottom: 20px;
                margin-right: 21px;
                width: 52px;
                height: 52px;
            }
            .nav-item {
                color: #FFFFFF;
                font-size: 22px;
                font-weight: 700;
                margin-top: 35px;
                margin-bottom: 33px;
            }
            .nav-settings {
                margin-top: 32px;
                margin-bottom: 35px;
                margin-left: 36px;
                margin-right: 40px;
                
                .btn-settings {
                   background-color: transparent;
                    &:focus, &:active {
                        outline: none;
                        box-shadow: none;
                    }
                }
            }
        }
    }
}
</style>
@section('header')
    <header class="header {{--header--transparent--}}">
        <div class="header__wrapper{{-- wrapper-1600--}}">
            <div class="header__logo">
                <a href="/" class="header__home-link">
                    <img src="/img/logo.png"
                         alt="ИнтерПро Разработка интернет-магазинов • Продвижение сайта • Графический дизайн"
                         class="header__logo-img">
                </a>
            </div>
            <div class="header__menu-toggle menu-toggle">
                <span class="menu-toggle__hamburger"></span>
                <span class="menu-toggle__cross"></span>
            </div>
            <div class="header__menu-window menu-window">
                <nav class="menu-window__menu menu">
                    <ul class="menu__list">
                        <li class="menu__item"><a href="#" class="menu__link">Агенство</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">Услуги</a></li>
                        <li class="menu__item"><a href="/portfolio" class="menu__link">Портфолио</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">Блог</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
@endsection
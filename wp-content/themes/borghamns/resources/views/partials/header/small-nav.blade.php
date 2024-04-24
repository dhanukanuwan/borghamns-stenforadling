<div class="collapse navbar-collapse" >
    <ul class="navbar-nav mb-0 ms-auto">
        <li class="nav-item dropdown d-flex align-items-center">
            <a href="{{home_url('/')}}" class="nav-link text-{{$text_color}} text-size-medium d-flex">
                <span class="d-flex align-items-center">
                    <img src="@asset('images/flags/sv.png')" alt="" width="20">
                    <span class="ms-2">Svenska</span>
                </span>
                <span class="icon-ion-chevron-down ms-1"></span>
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a href="{{home_url('/en')}}" class="nav-link text-size-medium">
                        <span class="d-flex align-items-center">
                            <img src="@asset('images/flags/en.png')" alt="" width="20">
                            <span class="ms-2">English</span>
                        </span>
                    </a>
                </li>
            </ul>
        </li>
        <li class="nav-item">
            <div class="d-flex align-items-center">
                <div id="search-wrap" class="search-wrap d-none">
                    <form action="{{home_url('/')}}">
                        <div class="input-group">
                            <input type="text" name="s" id="search_q" class="form-control rounded-start-pill text-size-medium bg-white border-0" style="height: 45px" placeholder="{{__('Sök här...', 'sage')}}" aria-label="{{__('Sök här...', 'borghamns')}}" />
                            <button type="submit" class="btn p-0 bg-white rounded-end-pill pe-2">
                                <span class="icon-ion-android-search" style="font-size: 24px"></span>
                            </button>
                        </div>
                        
                    </form>
                    <button id="search-close" type="button" class="btn p-0 text-{{$text_color}}">
                        <span class="icon-ion-android-close" style="font-size: 24px"></span>
                    </button>
                </div>
                <button id="search-trigger" type="btn" class="btn p-0 text-{{$text_color}}">
                    <span class="icon-ion-android-search" style="font-size: 24px"></span>
                </button>
            </div>
        </li>
    </ul>
</div>
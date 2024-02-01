@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())

  <section class="py-5 pt-lg-6">
    <div class="container">

        <div class="row align-items-center">
            <div class="col-12 col-lg-7">
                <div class="d-flex align-items-center">
                    <span class="line-right bg-dark-text d-inline-block"></span>
                    <span class="ms-2 text-primary">Familjen Ericcson</span>
                </div>
                <h2 class="mt-2 mb-3 liten">Tusenårig Tradition</h2>
                <p><b>FAMILJEN ERICSSON</b> har drivit Borghamns Stenförädling i fyra generationer. De förvaltar både en tusenårig tradition och en världsunik stenskatt: Kolmårdsmarmorn.</p>
            </div>
            <div class="col-12 col-lg-5">
                <div class="d-flex justify-content-end">
                    <a class="btn btn-dark-text rounded-0" aria-current="page" href="{{home_url('/om-oss')}}">
                        <div class="d-flex">
                            <span class="pe-2">Gå till team</span>
                            <div class="d-flex align-items-center">
                                <span class="line-right bg-white d-inline-block" style="margin-right: -12px;"></span>
                                <span class="icon-ion-ios-arrow-right"></span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="mt-2 w-100 d-inline-block">
                    <hr />
                </div>
            </div>
        </div>

        <div class="row align-items-center">
            <div class="col-12 col-xl-6">
                <img src="@asset('images/tim-och-mats.jpg')" class="mw-100" alt="" />
                <div class="d-flex mt-2">
                    <span class="text-size-medium opacity-75">Tim och Mats-Ola Ericsson</span>
                </div>
            </div>
            <div class="col-12 col-xl-6">
                <p>Oskar Ericsson var stenhuggare och den som
                    hösten 1951 grundade Borghamns Stenförädling.
                    Det var sent i livet. Han var 64 år, änkling
                    och förklarade att han ville lämna över något
                    till den ende sonen Ola som skickades att lära sig yrket av
                    en tysk bildhuggare. En gård köptes av en släkting, där man
                    visste att det fanns kalksten. Kort senare kom en första
                    stororder, när Ånestadsskolan i Linköping skulle byggas.
                    – Häromåret levererade vi ny sten till Ånestadsskolan,
                    skolan skulle byggs om efter 70 år, säger Mats-Ola Ericsson.
                    Mats-Ola är Olas son och den tredje generationen som
                    driver Borghamns Stenförädling. Han är också en av
                    Sveriges få stenhuggarmästare och tillika vice ordförande
                    i Sveriges Stenindustriförbund.</p>
                
                    <p>Borghamns Stenförädling både bryter och förädlar stenen,
                        vilket kräver bred kompetens. I de två brotten bryts den
                        klassiska Borghamnskalkstenen och Kolmårdsmarmor, som
                        Borghamns Stenförädling började bryta i Oxåker i mitten av
                        1990-talet. All brytning av Kolmårdsmarmor i Sverige hade
                        då legat nere sedan i slutet av 1970-talet. Efter en trevande
                        start fick den unika Kolmårdsmarmorn en renässans som
                        gett företaget en rejäl injektion.
                        – För tjugo år sedan stod den för knappt en femtedel av
                        omsättningen, i dag är det 60 procent. Vi är i dag det enda
                        företaget i Sverige med ett brytningstillstånd av Kolmårdsmarmor,
                        som gäller årtionden framåt, säger Mats-Ola.</p>
            </div>
        </div>

        <div class="row my-5">
            <div class="col-12 col-xl-6">
                <p>För tio år sedan gjorde den fjärde generationen i familjeföretaget
                    entré. Mats-Olas son Tim sadlade om efter en
                    idrottskarriär på elitnivå och bestämde sig för att gå i
                    samma
                    fotspår som pappa, Ola och Oskar.
                    Tim har tillfört företaget kunskaper om den digitala
                    teknikens
                    möjligheter, som sammanfallit med investeringar
                    i nya maskiner och utbyggnader. Men han har också starka
                    band till hantverket. Våren 2022 blev även Tim stenhuggarmästare,
                    den yngste i Sverige. Mats-Ola är stolt över att få
                    en efterföljare som också
                    breddar kompetensen. <br/>
                    – Tim kommer hela tiden
                    med nya lösningar och
                    strävar
                    efter högsta möjliga
                    kvalitet
                    i allt vad vi gör.
                    Kvalitetsfrågan
                    är oerhört
                    viktig för oss eftersom vi både levererar och förädlar en
                    premiumprodukt. Skulle vi ta genvägar eller göra ett sämre
                    jobb slår det tillbaka direkt på oss själva och vårt företagsnamn,
                    säger han.</p>

                    <p>
                        Företaget har också gått framåt på andra områden.
År 2020 blev man det första stenföretaget i Sverige som
övergick till helt fossilfri produktion. Anläggningarna
drivs nu av förnybar och närproducerad el från ett lokalt
vindkraftverk, uppvärmningen kommer från bergvärme
och lastmaskiner, truckar och företagsbilar tankas med
förnybar diesel. Satsningarna motiveras av både miljö- och
affärsmässiga skäl.
– Omställningen sker rekordsnabbt och på flera nivåer.
Det märks i upphandlingar. Även när vi inte ligger prismässigt
lägst får vi uppdragen för att vi arbetar klimatsmart
och använder närproducerad fossilfri energi, säger Tim.
                    </p>
            </div>
            <div class="col-12 col-xl-6">
                <img src="@asset('images/garden.jpg')" class="mw-100" alt="">
                <div class="d-flex mt-2 justify-content-end">
                    <span class="text-size-medium opacity-75">Gården där allt började 1951.</span>
                </div>
            </div>
        </div>

    </div>
</section>

<section class="py-5 pb-lg-6">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-12 col-lg-7">
                <div class="d-flex align-items-center">
                    <span class="line-right bg-primary d-inline-block"></span>
                    <span class="ms-2 text-primary">Produkter</span>
                </div>
                <h2 class="mt-2 mb-3 liten">Våra Stensorter</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis finibus nisi. Aliquam mollis eleifend ex, a aliquam leo porta ut. Nunc interdum tristique rhoncus.</p>

            </div>
            <div class="col-12 col-lg-5">
                <div class="d-flex justify-content-end">
                    <a class="btn btn-primary rounded-0" aria-current="page" href="{{home_url('/om-oss')}}">
                        <div class="d-flex">
                            <span class="pe-2">Läs mer</span>
                            <div class="d-flex align-items-center">
                                <span class="line-right bg-white d-inline-block" style="margin-right: -12px;"></span>
                                <span class="icon-ion-ios-arrow-right"></span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="mt-2 w-100 d-inline-block">
                    <hr />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
                <div class="round-img-wrap position-relative">
                    <div class="p-2 bg-white">
                        <img src="@asset('images/stones/Kolmardsmarmor_ox_normalslipad.jpg')" class="mw-100" alt="">
                    </div>
                    <div class="img-wrap-overlay position-absolute w-100 h-100 top-0 left-0 hero-content d-flex justify-content-center align-items-center">
                        <span class="text-white">Kolmårdsmarmor Ox</span>
                    </div>
                    
                </div>
                <h3 class="h6 liten text-center mt-3 mb-0">Kolmårdsmarmor Ox</h3>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="round-img-wrap position-relative">
                    <div class="p-2 bg-white">
                        <img src="@asset('images/stones/Grabrun_kalksten_borstad.jpg')" class="mw-100" alt="">
                    </div>
                    <div class="img-wrap-overlay position-absolute w-100 h-100 top-0 left-0 hero-content d-flex justify-content-center align-items-center">
                        <span class="text-white">Gråbrun Kalksten</span>
                    </div>
                    
                </div>
                <h3 class="h6 liten text-center mt-3 mb-0">Gråbrun Kalksten</h3>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="round-img-wrap position-relative">
                    <div class="p-2 bg-white">
                        <img src="@asset('images/stones/Kolmardsmarmor_oxl_borstad.jpg')" class="mw-100" alt="">
                    </div>
                    <div class="img-wrap-overlay position-absolute w-100 h-100 top-0 left-0 hero-content d-flex justify-content-center align-items-center">
                        <span class="text-white">Kolmårdsmarmor Oxl</span>
                    </div>
                    
                </div>
                <h3 class="h6 liten text-center mt-3 mb-0">Kolmårdsmarmor Oxl</h3>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <div class="round-img-wrap position-relative">
                    <div class="p-2 bg-white">
                        <img src="@asset('images/stones/Ljusgra_kalksten_lagerhuggen.jpg')" class="mw-100" alt="">
                    </div>
                    <div class="img-wrap-overlay position-absolute w-100 h-100 top-0 left-0 hero-content d-flex justify-content-center align-items-center">
                        <span class="text-white">Ljusgrå Kalksten</span>
                    </div>
                    
                </div>
                <h3 class="h6 liten text-center mt-3 mb-0">Ljusgrå Kalksten</h3>
            </div>
        </div>

    </div>
</section>

<section class="position-relative">
    <div class="hero-bg position-absolute w-100 h-100 top-0 left-0 d-flex">
        <img src="@asset('images/stone-bg.jpg')" class="w-100 object-fit-cover" alt="" />
    </div>
    <div class="hero-content position-relative py-5 py-xl-6">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-lg-8 text-white">
                    <div class="d-flex align-items-center">
                        <span class="line-right bg-white d-inline-block"></span>
                        <span class="ms-2 text-white">FAQ</span>
                    </div>
                    <h2 class="mt-2 mb-3 liten text-white">Sveriges yngsta stenmästare</h2>
                    <p>Tim Ericsson är landets både yngsta och senaste stenhuggarmästare.</p>

                </div>
                <div class="col-12 col-lg-4">
                    <div class="d-flex justify-content-end">
                        <a class="btn btn-dark-text rounded-0" aria-current="page" href="{{home_url('/faq')}}">
                            <div class="d-flex">
                                <span class="pe-2">Visa alla FAQ</span>
                                <div class="d-flex align-items-center">
                                    <span class="line-right bg-white d-inline-block" style="margin-right: -12px;"></span>
                                    <span class="icon-ion-ios-arrow-right"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="mt-2 w-100 d-inline-block">
                        <hr class="text-white" />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">

                    <div class="faq-warp">

                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item mb-2">
                              <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h3 class="liten h5 mb-0">Vad innebär mästartiteln?</h3>
                                </button>
                              </h2>
                              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Det är ett bevis på att man
                                    besitter yrkeskunnandet och samtidigt
                                    kan driva ett företag. Det
                                    finns ju en motsvarighet i många
                                    branscher, men det är inte så vanligt
                                    i stenbranschen i Sverige.
                                    Därför känns det extra viktigt att
                                    förvalta en hantverkstradition
                                    som annars riskerar att försvinna. </p>
                                    <p>På Borghamns Stenförädling
                                    är vi i dag tre stenmästare. Det
                                    har funnits tre före oss, varav min
                                    farfar var en av dem. Det är viktigt
                                    för oss att hålla kvar i traditionen
                                    eftersom vi både bryter och
                                    förädlar vårt material.</p>
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item mb-2">
                              <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <h3 class="liten h5 mb-0">Hur kommer det sig att ni är så många mästare hos just Borghamns Stenförädling?</h3>
                                </button>
                              </h2>
                              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                  <p>För att hantverket alltid har
                                    varit väldigt viktigt för oss. Vi
                                    håller även på en hel del med restaureringar,
                                    till exempel i Linköpings
                                    domkyrka
                                    som fick Stenpriset
                                    2021. Då får man verkligen
                                    kontakt med historien och lär sig
                                    att efterlikna original.</p>
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item mb-2">
                              <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <h3 class="liten h5 mb-0">Vad är det bästa med att vara stenhuggare?</h3>
                                </button>
                              </h2>
                              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                  <p>Skapandet och den stora
                                    konstnärliga friheten!</p>
                                </div>
                              </div>
                            </div>
                          </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
</section>

  @endwhile
@endsection

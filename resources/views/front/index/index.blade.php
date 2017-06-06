@extends('front.layout')
@include('front.header_transparent')
@include('front.index.meta')
@section('content')
    <section class="content project">
        <div class="project__wrapper wrapper-1600">
            <div class="project__content">
                <div class="project__illustrations-col illustrations">
                    <ul class="illustrations__list">
                        <li class="illustrations__item">
                            <div class="illustrations__img-wrapper">
                                <img class="illustrations__img" src="/dev_img/1.jpg" alt="">
                            </div>
                        </li>
                        <li class="illustrations__item">
                            <div class="illustrations__img-wrapper">
                                <img class="illustrations__img" src="/dev_img/2.jpg" alt="">
                            </div>
                        </li>
                        <li class="illustrations__item">
                            <div class="illustrations__img-wrapper">
                                <img class="illustrations__img" src="/dev_img/3.jpg" alt="">
                            </div>
                        </li>
                        <li class="illustrations__item">
                            <div class="illustrations__img-wrapper">
                                <img class="illustrations__img" src="/dev_img/4.jpg" alt="">
                            </div>
                        </li>
                        <li class="illustrations__item">
                            <div class="illustrations__img-wrapper">
                                <img class="illustrations__img" src="/dev_img/5.jpg" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="project__description-col description">
                    <h1 class="description__title">Apfonia</h1>
                    <h3 class="description__sub-title">Branding Studio</h3>
                    <div class="description__text text-block">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                            language ocean.</p><br>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                            life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the
                            far World of Grammar. The Big Oxmox advised her not to do so.</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                            the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                            language ocean.</p>
                    </div>
                </div>
            </div>
            {{--<div class="project__navigation"></div>--}}
        </div>
    </section>
@endsection
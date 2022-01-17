
var cssClass = [];

var trbl = function(x) {
    return ['top', 'right', 'bottom', 'left'][
        ['t', 'r', 'b', 'l'].indexOf(x)
    ];
}

var styleMaker = function(subClass, el) {

    if(class8.log){
        // if(subClass.indexOf('cont-') != -1)
        console.log('styleMaking for: ', subClass);
    }

    var important = false;
    if (subClass.indexOf('!') == 0) {
        important = true;
        subClass = subClass.substr(1);
    }

    function nth (n) {
        return subClass.substr(subClass.nth_occurrence('-', n)+1).replace(/_/g, ' ')
    }

    var color, width, style, output;

    // var cls_arr = subClass.split('-');

    switch (true) {
        case subClass.indexOf('dis-') == 0:
            output = 'display: ' + subClass.substr(4);
            break;
        case subClass.indexOf('vis-') == 0:
            output = 'visibility: ' + nth(1);
            break;
        case subClass.indexOf('flex-grow-') == 0:
            output = 'flex-grow: ' + subClass.substr(10);
            break;
        case subClass.indexOf('flex-wrap-') == 0:
            output = 'flex-wrap: ' + subClass.substr(10);
            break;
        case subClass.indexOf('flex-flow-') == 0:
            output = 'flex-flow: ' + subClass.substr(10);
            break;
        case subClass.indexOf('align-items-') == 0:
            output = 'align-items: ' + subClass.substr(12);
            break;
        case subClass.indexOf('align-content-') == 0:
            output = 'align-content: ' + subClass.substr(14);
            break;
        case subClass.indexOf('flex-dir-') == 0:
            output = 'flex-direction: ' + subClass.substr(9);
            break;
        case subClass.indexOf('order-') == 0:
            output = 'order: ' + subClass.substr(6);
            break;

        case subClass.indexOf('justify-') == 0:
            output = 'justify-content: ' + subClass.substr(8);
            break;

        case subClass.indexOf('w-') == 0:
            output = 'width: ' + subClass.substr(2);
            break;
        case subClass.indexOf('h-') == 0:
            output = 'height: ' + subClass.substr(2);
            break;
        case subClass.indexOf('minw-') == 0:
            output = 'min-width: ' + subClass.substr(5);
            break;
        case subClass.indexOf('minh-') == 0:
            output = 'min-height: ' + subClass.substr(5);
            break;
        case subClass.indexOf('maxw-') == 0:
            output = 'max-width: ' + subClass.substr(5);
            break;
        case subClass.indexOf('maxh-') == 0:
            output = 'max-height: ' + subClass.substr(5);
            break;
        case subClass.indexOf('lstyle-') == 0:
            output = 'list-style: ' + subClass.substr(7);
            break;
        case subClass.indexOf('lspacing-') == 0:
            output = 'letter-spacing: ' + subClass.substr(9);
            break;
        case subClass.indexOf('cursor-') == 0:
            output = 'cursor: ' + subClass.substr(7);
            break;

        case subClass.indexOf('fs-') == 0:
            output = 'font-size: ' + subClass.substr(3);
            break;

        case subClass.indexOf('o-') == 0:
            output = 'opacity: ' + subClass.substr(2);
            break;

            //  case subClass.indexOf('border-t-') == 0:
            //    width = cls_arr[2];
            //    color = cls_arr[3];
            //    style = (cls_arr[4]||'solid');
            //    output = 'border-top: ' + width + ' ' + style + ' ' + color;
            //  break;
        case subClass.indexOf('border-') == 0:

            if (subClass.nth_occurrence('-', 2) == -1) {
                output = 'border: ' + nth(1);                
            } else if (subClass.nth_occurrence('-', 3) == -1) {
                if(subClass.nth_occurrence('-', 2) == 8 && ['t', 'r', 'b', 'l'].indexOf(subClass.substr(7,1)) > -1){
                    output = 'border-' + trbl(subClass.substr(7,1)) + ': ' + nth(2);
                }else if(subClass.nth_occurrence('-', 2) == 8 && ['x', 'y'].indexOf(subClass.substr(7,1)) > -1){
                    if(subClass.substr(7,1)=='x'){
                        output = 'border-left: ' + nth(2) + '; border-right: ' + nth(2);
                    }
                    else if(subClass.substr(7,1)=='y'){
                        output = 'border-top: ' + nth(2) + '; border-bottom: ' + nth(2);
                    }
                }else if (['color', 'width', 'style'].indexOf(subClass.substr(7,5)) != -1) {
                    output = 'border-' + subClass.substr(7,5) + ': ' + nth(2);
                }
            } else if (subClass.nth_occurrence('-', 3) != -1) {
                output = 'border-' + trbl(subClass.substr(7,1)) + '-' + subClass.split('-')[2] + ': ' + subClass.split('-')[3];
            }

            //     if (['color', 'width', 'style'].indexOf(cls_arr[2]) > -1) {
            //         output = 'border-' + trbl(cls_arr[1]) + '-' + cls_arr[2] + ': ' + cls_arr[3];
            //     } else {
            //         width = cls_arr[2];
            //         color = cls_arr[3];
            //         style = (cls_arr[4] || 'solid');
            //         output = 'border-' + trbl(cls_arr[1]) + ': ' + width + ' ' + style + ' ' + color;
            //     }

            // } else if (['color', 'width', 'style'].indexOf(cls_arr[1]) > -1) {
            //     output = 'border-' + cls_arr[1] + ': ' + cls_arr[2];
            // } else {
            //     width = '';
            //     color = '';
            //     style = '';
            //     output = 'border: ' + subClass.substr(7).replace(/-/g, ' ').replace(/_/g, ' ');
            // }
            // output + width + ' ' + style + ' ' + color;
            break;
        case subClass.indexOf('outline-') == 0:
            output = 'outline: ' + nth(1);   
        //     if (cls_arr[1] == 'none') {
        //       output = 'outline: none';
        //     } else if (['color', 'width', 'style'].indexOf(cls_arr[1]) > -1) {
        //         output = 'outline-' + cls_arr[1] + ': ' + cls_arr[2];
        //     } else {
        //         width = cls_arr[1];
        //         color = cls_arr[2];
        //         style = (cls_arr[3] || 'solid');
        //         output = 'outline: ' + width + ' ' + style + ' ' + color;
        //     }
        //     output + width + ' ' + style + ' ' + color;
            break;
        case subClass.indexOf('resize-') == 0:
            output = 'resize: ' + nth(1);
            break;

        case subClass.indexOf('br-') == 0:
            output = 'border-radius: ' + subClass.substr(3).replace(/_/g, ' ');
            break;

        case subClass.indexOf('bg-') == 0:
            output = 'background-color: ' + subClass.substr(3);
            break;

        case subClass.indexOf('bg-img') == 0:
            output = 'background-image: url("' + nth(2) + '")';
            break;

        case subClass.indexOf('color-') == 0:
            output = 'color: ' + subClass.substr(6);
            break;

        case ['text-left', 'text-right', 'text-center', 'text-justify'].indexOf(subClass) != -1:
            output = 'text-align: ' + nth(1);
            break;
        case ['align-left', 'align-right', 'align-center', 'align-justify'].indexOf(subClass) != -1:
            output = 'text-align: ' + nth(1);
            break;
        case ['float-left', 'float-right', 'float-none'].indexOf(subClass) != -1:
            output = 'float: ' + nth(1);
            break;

        case ['f-bold', 'f-normal', 'fw-bold', 'fw-normal'].indexOf(subClass) != -1:
            output = 'font-weight: ' + nth(1);
            break;
        case subClass.indexOf('text-decoration') == 0:
            output = 'text-decoration: ' + nth(2);
            break;
        case subClass.indexOf('text-overflow') == 0:
            output = 'text-overflow: ' + nth(2);
            break;

        case ['pos-absolute', 'pos-fixed', 'pos-relative', 'pos-static', 'pos-sticky'].indexOf(subClass) != -1:
            output = 'position: ' + nth(1);
            break;

        case subClass.indexOf('top-') == 0:
            output = 'top: ' + nth(1);
            break;
        case subClass.indexOf('right-') == 0:
            output = 'right: ' + nth(1);
            break;
        case subClass.indexOf('bottom-') == 0:
            output = 'bottom: ' + nth(1);
            break;
        case subClass.indexOf('left-') == 0:
            output = 'left: ' + nth(1);
            break;

        case subClass.indexOf('z-') == 0: // && (!isNaN(cls_arr[1]) || cls_arr[1] == 'auto'):
            output = 'z-index: ' + nth(1);
            break;

        case subClass.indexOf('p-') == 0:
            output = 'padding: ' + nth(1);
            break;
        case subClass.indexOf('pt-') == 0:
            output = 'padding-top: ' + nth(1);
            break;
        case subClass.indexOf('pr-') == 0:
            output = 'padding-right: ' + nth(1);
            // $target = document.querySelector('style.upd8-style-l2');
            break;
        case subClass.indexOf('pb-') == 0:
            output = 'padding-bottom: ' + nth(1);
            break;
        case subClass.indexOf('pl-') == 0:
            output = 'padding-left: ' + nth(1);
            break;
        case subClass.indexOf('px-') == 0:
            output = 'padding-left: ' + nth(1) + (important ? ' !important' : '');
            output += '; padding-right: ' + nth(1);
            break;
        case subClass.indexOf('py-') == 0:
            output = 'padding-top: ' + nth(1) + (important ? ' !important' : '');
            output += '; padding-bottom: ' + nth(1);
            break;
        case subClass.indexOf('m-') == 0:
            output = 'margin: ' + nth(1);
            break;
        case subClass.indexOf('mt-') == 0:
            output = 'margin-top: ' + nth(1);
            break;
        case subClass.indexOf('mr-') == 0:
            output = 'margin-right: ' + nth(1);
            break;
        case subClass.indexOf('mb-') == 0:
            output = 'margin-bottom: ' + nth(1);
            break;
        case subClass.indexOf('ml-') == 0:
            output = 'margin-left: ' + nth(1);
            break;
        case subClass.indexOf('mx-') == 0:
            output = 'margin-left: ' + nth(1) + (important ? ' !important' : '');
            output += '; margin-right: ' + nth(1);
            break;
        case subClass.indexOf('my-') == 0:
            output = 'margin-top: ' + nth(1) + (important ? ' !important' : '');
            output += '; margin-bottom: ' + nth(1);
            break;

        case subClass.indexOf('valign-') == 0:
            output = 'vertical-align: ' + nth(1);
            break;

        case subClass.indexOf('dir-') == 0 && ['rtl', 'ltr', 'auto', 'revert', 'unset'].indexOf(nth(1)) != -1:
            output = 'direction: ' + nth(1);
            break;
        case subClass.indexOf('ws-') == 0:
            output = 'white-space: ' + nth(1);
            break;

        case subClass.indexOf('lh-') == 0:
            output = 'line-height: ' + nth(1);
            break;
        case subClass.indexOf('overflow-x-') == 0:
            output = 'overflow-x: ' + nth(2);
            break;
        case subClass.indexOf('overflow-y-') == 0:
            output = 'overflow-y: ' + nth(2);
            break;

        case subClass.indexOf('overflow-') == 0:
            output = 'overflow: ' + nth(1);
            break;
        case subClass.indexOf('content-') == 0:
            output = 'content: "' + nth(1) + '"';
            break;

        case subClass.indexOf('shadow-') == 0:

            output = 'box-shadow: ' + nth(1);
            break;
        case subClass.indexOf('tshadow-') == 0:

            output = 'text-shadow: ' + nth(1);
            break;

        case subClass.indexOf('tr-') == 0:

            output = 'transition: ' + nth(1);
            break;
            
        case subClass.indexOf('trf-origin-') == 0:
            output = 'transform-origin: ' + nth(2);
            
            break;
            
        case subClass.indexOf('trf-') == 0:
            output = 'transform: ' + nth(1);
            break;
        case subClass.indexOf('perspective-') == 0:
            output = 'perspective: ' + nth(1);
            break;

        case subClass.indexOf('delay-') == 0:
            output = 'animation-delay: ' + nth(1);
            break;
        case subClass.indexOf('ani-du-') == 0:
            output = 'animation-duration: ' + nth(2);
            break;

        case subClass.indexOf('gtc-') == 0:
            output = 'grid-template-columns: ' + subClass.substr(4).replace(/_/g, ' ');
            break;
        case subClass.indexOf('gtr-') == 0:
            output = 'grid-template-rows: ' + subClass.substr(4).replace(/_/g, ' ');
            break;

        case subClass.indexOf('gcs-') == 0:
            output = 'grid-column-start: ' + nth(1);
            break;

        case subClass.indexOf('gce-') == 0:
            output = 'grid-column-end: ' + nth(1);
            break;
            
        case subClass.indexOf('grid-area-') == 0:
            output = 'grid-area: ' + nth(2);
            break;

        case subClass.indexOf('gap-') == 0:
            output = 'gap: ' + subClass.substr(4).replace(/_/g, ' ');
            break;

        case subClass.indexOf('will-change-') == 0:
            output = 'will-change: ' + subClass.substr(12);
            break;
        case subClass.indexOf('filter-') == 0:
            output = 'filter: ' + nth(1);
            break;



        
        







        case subClass.indexOf('center-xy') == 0:
            output = ' position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) ';
            break;

        case subClass.indexOf('center-y') == 0:
            output = ' position: absolute; top: 50%; transform: translateY(-50%); ';
            break;

        case subClass.indexOf('mask-w-') == 0:
            output = 'content: ""; position: absolute; left: 0; right: 0; top: 0; bottom: 0; width: 100%; height: 100%; z-index: 1; background-color: rgba(255,255,255,'+ subClass.substr(7) +') ';
            break;

        case subClass.indexOf('mask-b-') == 0:
            output = 'content: ""; position: absolute; left: 0; right: 0; top: 0; bottom: 0; width: 100%; height: 100%; z-index: 1; background-color: rgba(0,0,0,'+ subClass.substr(7) +') ';
            break;

        case subClass.indexOf('flip-') == 0:
            if(nth(1) == 'x')
                output = 'transform: rotateY(180deg)'
            else if(nth(1) == 'y')
                output = 'transform: rotateX(180deg)'
            else if(nth(1) == 'xy')
                output = 'transform: rotate(180deg)'
            else if(!isNaN(nth(1)))
                output = 'transform: rotate('+nth(1)+'deg)'
            break;

        case subClass.indexOf('translate-x') == 0:
                output = 'transform: translateX('+nth(2)+')'
            break;
            case subClass.indexOf('translate-y') == 0:
                output = 'transform: translateY('+nth(2)+')'
            break;

        case subClass.indexOf('overlay-') == 0:
            if(nth(1) == 'all')
                output = 'position: absolute; top: 0; right: 0; left: 0; bottom: 0; width: 100%; height: 100%;'
            break;

        default:
        // console.log('NO>> ', subClass, {el:{el}});
        
            break;
    }

    if (output != undefined) return '\t' + output + (important ? ' !important' : '') + ';\n';
    else return '';
}

var addStyleByClass = function(cls, el) {
    // console.log(cls);
    // return

    var _this = this;
    var _cls = cls.toString();
    var parent_cls = '';
    var child_cls = '';
    // OLD! var cls_props = cls.match(/_\(([^)]+)\)|\(([^)]+)\)_|(l\d+)|(((!|#|)(|\w+)(|-)[^(:|/b)]){2,})/g)
    // var cls_props = cls.match(/_\{([^}]+)\}|\{([^}]+)\}_|(l\d+)|(((!|#|)(|\w+)(|-)[^(:|/b)]){2,})/g)
    var cls_props = cls.match(/(((\{([^}]+)\}_)|(_\{([^}]+)\})))|(!|\b(\w|-|#|%|,|\.|\(([^)]*)\))+)+/g)
    // var cls_props = cls.split(':')

    // console.log(cls, ' ==> ' ,cls_props);

    var output = '';
    var $target;

    var level = 0;

    (cls_props || []).forEach(function(prop) {
        if(class8.log)
            console.log('prop: ', prop);
        // return

        if (/l\d+/.test(prop)) {
            // console.log('type 1');
            level = prop.substr(1);
        } else if (/_\{.+\}/.test(prop)) {
            // console.log('type 2');
            parent_cls += prop.slice(2, -1);
        } else if (/\{.+\}_/.test(prop)) {
            // console.log('type 3');
            child_cls += prop.slice(1, -2);
        } else {
            // console.log('type 4');
            output += styleMaker(prop, el);
        }
    });

    if(class8.log)
        console.log('output: ', output);

    if(output.indexOf('calc(') != -1){
        var calc = output.match(/calc\(([^)]+)\)/);
        if(calc.length)
            output = output.replace(calc[1], calc[1].replace('-', ' - ').replace('+', ' + '))
    }
    // return

    if (output.trim().length > 0) {

        $target = document.querySelector('style.class8-' + level);

        var head = document.head || document.getElementsByTagName('head')[0];
        if (!$target) {
            var styleEl = document.createElement('style');
            styleEl.className = 'class8-' + level;
            styleEl.attributes.level = level;
            head.appendChild(styleEl);
            $target = document.querySelector('style.class8-' + level);
        }

        // console.log(_cls, cls);

        if (parent_cls.length > 0 || child_cls.length > 0 || _cls.indexOf('(') != -1) {
            // console.log(_cls);
            cls = '[class*="' + _cls + '"]';
        } else {
            cls = '.' +
                _cls
                // .replace(/\\/g, '\\\\')
                .replace(/#/g, '\\#')
                .replace(/:/g, '\\:')
                .replace(/\./g, '\\.')
                .replace(/\(/g, '\\(')
                .replace(/\)/g, '\\)')
                .replace(/\{/g, '\\{')
                .replace(/\}/g, '\\}')
                .replace(/!/g, '\\!')
                .replace(/%/g, '\\%');
        }

        // console.log(parent_cls, cls, child_cls);

        parent_cls.split(',').forEach(function(p) {
            child_cls.split(',').forEach(function(ch) {
                var style_line = p + cls + ch + '{\n' + output + '\n}\n';
                $target.append(style_line)
                // console.log(_cls+'\n\n', style_line);
            });
        });

        var para = document.querySelectorAll('style[class^="class8-"');
        var paraArr = [].slice.call(para).sort(function(a, b) {
            return parseInt(a.attributes.level) > parseInt(b.attributes.level) ? 1 : -1;
        });
        paraArr.forEach(function(p) {
            head.appendChild(p);
        });


        // console.log(_cls, style_line, ' class inserted!');
    }

    cssClass.push(_cls);
    

};

var setupResponsive = function(window) {


    /* Smartphones (portrait) ----------- */
    var phone = window.matchMedia('only screen and (min-width : 320px) and (max-width : 480px)');
    var do_phone = function(m) {
        if (m.matches) {
            document.body.setAttribute('phone', 'portrait')
        } else if (document.body.getAttribute('phone') == 'portrait') {
            document.body.removeAttribute('phone')
        }
    }
    phone.addListener(do_phone);
    do_phone(phone)

    /* Smartphones (landscape) ----------- */
    var phone_landscape = window.matchMedia('only screen and (min-width: 481px) and (max-width: 767px)');
    var do_phone_landscape = function(m) {
        if (m.matches) {
            document.body.setAttribute('phone', 'landscape')
        } else if (document.body.getAttribute('phone') == 'landscape') {
            document.body.removeAttribute('phone')
        }
    }
    phone_landscape.addListener(do_phone_landscape);
    do_phone_landscape(phone_landscape)




    /* Tablets, Ipads (portrait) ----------- */
    var tablet = window.matchMedia('only screen and (min-width: 768px) and (max-width: 1024px)');
    var do_tablet = function(m) {
        if (m.matches) {
            document.body.setAttribute('tablet', 'portrait')
        } else if (document.body.getAttribute('tablet') == 'portrait') {
            document.body.removeAttribute('tablet')
        }
    }
    tablet.addListener(do_tablet);
    do_tablet(tablet)


    /*  Tablets, Ipads (landscape) ----------- */
    var tablet_landscape = window.matchMedia('only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)');
    var do_tablet_landscape = function(m) {
        if (m.matches) {
            document.body.setAttribute('tablet', 'landscape')
        } else if (document.body.getAttribute('tablet') == 'landscape') {
            document.body.removeAttribute('tablet')
        }
    }
    tablet_landscape.addListener(do_tablet_landscape);
    do_tablet_landscape(tablet_landscape)


    /* Desktops and laptops ----------- */
    var desktop = window.matchMedia('only screen and (min-width : 1024px)');

    var do_desktop = function(m) {
        if (m.matches) {
            document.body.setAttribute('desktop', '')
            document.body.removeAttribute('no-desktop')
        } else {
            document.body.removeAttribute('desktop')
            document.body.setAttribute('no-desktop', '')
        }
    }
    desktop.addListener(do_desktop);
    do_desktop(desktop)

    /* Large screens ----------- */
    // and (min-width : 1824px)


    /* iPhone 4 ----------- */
    // only screen and (-webkit-min-device-pixel-ratio : 1.5),
    // only screen and (min-device-pixel-ratio : 1.5)


}

const class8 = {

    // The install method is all that needs to exist on the plugin object.
    // It takes the global Vue object as well as user-defined options.
    install(Vue, options) {

        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: true, subtree: true };

        // Callback function to execute when mutations are observed
        const callback = function(mutationsList, observer) {

            document.querySelectorAll('[class]').forEach(el => {

                (el.attributes['class']
                    .value
                    // .trim()
                    // .match(/((\([^)]+\)_|_\([^)]+\)|l\d):)*([^\s]+)/g)||[])
                    // .match(/((\{[^}]+\}_|_\{[^}]+\}|l\d):)*([^\s]+)/g) || [])
                    // .match(/(((\{([^}]+)\}_)|(_\{([^}]+)\})):)*(!|\b(\w|-|#|%|\.|\(([^)]*)\)|:|[^ ])+)+/g) || [])
                    .match(/(((\{([^}]+)\}_)|(_\{([^}]+)\})):)*(!|\b([^ ])+)+/g) || [])
                // el.classList
                .forEach(cls => {
                    if(class8.log)
                        console.log('cls1: ', cls, el); //, el.attributes['class'].value);
                    cls = cls.trim();
                    if (cls.length == 0) return;
                    if (cssClass.indexOf(cls) === -1) {
                        cssClass.push(cls);
                        // if(cls.indexOf('top-.7') != -1)
                        if(class8.log)
                            console.log('cls2: ', cls, el); //, el.attributes['class'].value);
                        // console.log(cssClass);
                        // return;
                        addStyleByClass(cls, el);
                    }
                })

            })

            return;
            // Use traditional 'for loops' for IE 11
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    console.log('A child node has been added or removed.');
                } else if (mutation.type === 'attributes') {
                    console.log('The ' + mutation.attributeName + ' attribute was modified.');
                }
            }

            console.log(mutationsList, observer);
        };

        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(document.body, config);

        // We call Vue.mixin() here to inject functionality into all components.
        Vue.mixin({
            // Anything added to a mixin will be injected into all components.
            // In this case, the mounted() method runs when the component is added to the DOM.
            mounted() {
                // console.log('Mounted!');
            }
        });

        if (window) setupResponsive(window)

    },

    log: false
};


String.prototype.nth_occurrence = function(char, nth) {
    var string = this;
    var first_index = string.indexOf(char);
    var length_up_to_first_index = first_index + 1;

    if (nth == 1) {
        return first_index;
    } else {
        var string_after_first_occurrence = string.slice(length_up_to_first_index);
        var next_occurrence = string_after_first_occurrence.nth_occurrence(char, nth - 1);

        if (next_occurrence === -1) {
            return -1;
        } else {
            return length_up_to_first_index + next_occurrence;  
        }
    }
}

module.exports = class8;
if(typeof window !== 'undefined' && !window.class8){
    window.class8 = class8;
}
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(class8)
}


















// // Options for the observer (which mutations to observe)
// const config = { attributes: true, childList: true, subtree: true };

// // Callback function to execute when mutations are observed
// const callback = function(mutationsList, observer) {

//   return _this.getClasses();
//     // Use traditional 'for loops' for IE 11
//     for(let mutation of mutationsList) {
//         if (mutation.type === 'childList') {
//             console.log('A child node has been added or removed.');
//         }
//         else if (mutation.type === 'attributes') {
//             console.log('The ' + mutation.attributeName + ' attribute was modified.');
//         }
//     }

//     console.log(mutationsList, observer);        
// };

// // Create an observer instance linked to the callback function
// const observer = new MutationObserver(callback);

// // Start observing the target node for configured mutations
// observer.observe(document.body, config);

// // Later, you can stop observing
// // observer.disconnect();

// return;

// this.onDomChange();
// window.onDomChange(function(){ 
//   console.log('DOM changed',_this.$el);
// });

// return;
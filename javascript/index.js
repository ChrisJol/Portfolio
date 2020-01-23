import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

import { setVh, bloom } from "../javascript/bloom"
import "../javascript/carousel"
import { setScrollPosition, setEventListeners} from "../javascript/scroll"
import "../javascript/tween"

gsap.registerPlugin(ScrollToPlugin)

setEventListeners()
setScrollPosition()
setVh()
bloom()
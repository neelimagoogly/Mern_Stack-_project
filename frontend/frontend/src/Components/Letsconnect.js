import React, {Component} from 'react';
import axios from 'axios';
import Footer from './Footer';


export default class Letsconnect extends Component {
    

    constructor(props) {
        super(props);
        var show = true;
        var show2 = true;
        var show3 = true;
        



        this.showCheckboxes = this.showCheckboxes.bind(this);
        this.showCheckboxes = this.showCheckboxes2.bind(this);
        this.showCheckboxes = this.showCheckboxes3.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
      
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        
        this.onChangeacres = this.onChangeacres.bind(this);
        this.onChangeaudit = this.onChangeaudit.bind(this);
        this.onChangecommodities1 = this.onChangecommodities1.bind(this);
        this.onChangecommodities2 = this.onChangecommodities2.bind(this);
        this.onChangecommodities3 = this.onChangecommodities3.bind(this);
        this.onChangecommodities4 = this.onChangecommodities4.bind(this);
        this.onChangecommodities5 = this.onChangecommodities5.bind(this);
        this.onChangecommodities6 = this.onChangecommodities6.bind(this);
        this.onChangecommodities7 = this.onChangecommodities7.bind(this);
        this.onChangecommodities8 = this.onChangecommodities8.bind(this);
        this.onChangecommodities9 = this.onChangecommodities9.bind(this);
        this.onChangecommodities10 = this.onChangecommodities10.bind(this);
        this.onChangecommodities11 = this.onChangecommodities11.bind(this);
        this.onChangecommodities12 = this.onChangecommodities12.bind(this);
        this.onChangecommodities13 = this.onChangecommodities13.bind(this);
        this.onChangecommodities14 = this.onChangecommodities14.bind(this);
        this.onChangecommodities15 = this.onChangecommodities15.bind(this);
        this.onChangecommodities16 = this.onChangecommodities16.bind(this);
        this.onChangecommodities17 = this.onChangecommodities17.bind(this);
        this.onChangecommodities18 = this.onChangecommodities18.bind(this);
        this.onChangecommodities19 = this.onChangecommodities19.bind(this);
        this.onChangecommodities20 = this.onChangecommodities20.bind(this);
        this.onChangecommodities21 = this.onChangecommodities21.bind(this);
        this.onChangecommodities22 = this.onChangecommodities22.bind(this);
        this.onChangecommodities23 = this.onChangecommodities23.bind(this);
        this.onChangecommodities24 = this.onChangecommodities24.bind(this);
        this.onChangecommodities25 = this.onChangecommodities25.bind(this);
        this.onChangecommodities26 = this.onChangecommodities26.bind(this);
        this.onChangecommodities27 = this.onChangecommodities27.bind(this);
        this.onChangecommodities28 = this.onChangecommodities28.bind(this);
        this.onChangecommodities29 = this.onChangecommodities29.bind(this);
        this.onChangecommodities30 = this.onChangecommodities30.bind(this);
        this.onChangecommodities31 = this.onChangecommodities31.bind(this);
        this.onChangecommodities32 = this.onChangecommodities32.bind(this);
        this.onChangecommodities33 = this.onChangecommodities33.bind(this);
        this.onChangecommodities34 = this.onChangecommodities34.bind(this);
        this.onChangecommodities35 = this.onChangecommodities35.bind(this);
        this.onChangecommodities36 = this.onChangecommodities36.bind(this);
        this.onChangecommodities37 = this.onChangecommodities37.bind(this);
        this.onChangecommodities38 = this.onChangecommodities38.bind(this);
        this.onChangecommodities39 = this.onChangecommodities39.bind(this);
        this.onChangecommodities40 = this.onChangecommodities40.bind(this);
        this.onChangecommodities41 = this.onChangecommodities41.bind(this);
        this.onChangecommodities42 = this.onChangecommodities42.bind(this);
        this.onChangecommodities43 = this.onChangecommodities43.bind(this);
        this.onChangecommodities44 = this.onChangecommodities44.bind(this);
        this.onChangecommodities45 = this.onChangecommodities45.bind(this);
        this.onChangecommodities46 = this.onChangecommodities46.bind(this);
        this.onChangecommodities47 = this.onChangecommodities47.bind(this);
        this.onChangecommodities48 = this.onChangecommodities48.bind(this);
        this.onChangecommodities49 = this.onChangecommodities49.bind(this);
        this.onChangecommodities50 = this.onChangecommodities50.bind(this);
        this.onChangecommodities51 = this.onChangecommodities51.bind(this);
        this.onChangecommodities52 = this.onChangecommodities52.bind(this);
        this.onChangecommodities53 = this.onChangecommodities53.bind(this);
        this.onChangecommodities54 = this.onChangecommodities54.bind(this);
        this.onChangecommodities55 = this.onChangecommodities55.bind(this);
        this.onChangecommodities56 = this.onChangecommodities56.bind(this);
        this.onChangecommodities57 = this.onChangecommodities57.bind(this);
        this.onChangecommodities58 = this.onChangecommodities58.bind(this);
        this.onChangecommodities59 = this.onChangecommodities59.bind(this);
        this.onChangecommodities60 = this.onChangecommodities60.bind(this);
        this.onChangecommodities61 = this.onChangecommodities61.bind(this);
        this.onChangecommodities62 = this.onChangecommodities62.bind(this);
        this.onChangecommodities63 = this.onChangecommodities63.bind(this);
        this.onChangecommodities64 = this.onChangecommodities64.bind(this);
        this.onChangecommodities65 = this.onChangecommodities65.bind(this);
        this.onChangecommodities66 = this.onChangecommodities66.bind(this);
        this.onChangecommodities67 = this.onChangecommodities67.bind(this);
        this.onChangecommodities68 = this.onChangecommodities68.bind(this);
        this.onChangecommodities69 = this.onChangecommodities69.bind(this);
        this.onChangecommodities70 = this.onChangecommodities70.bind(this);
        this.onChangecommodities71 = this.onChangecommodities71.bind(this);
        this.onChangecommodities72 = this.onChangecommodities72.bind(this);
        this.onChangecommodities73 = this.onChangecommodities73.bind(this);
        this.onChangecommodities74 = this.onChangecommodities74.bind(this);
        this.onChangecommodities75 = this.onChangecommodities75.bind(this);
        this.onChangecommodities76 = this.onChangecommodities76.bind(this);
        this.onChangecommodities77 = this.onChangecommodities77.bind(this);
        this.onChangecommodities78 = this.onChangecommodities78.bind(this);
        this.onChangecommodities79 = this.onChangecommodities79.bind(this);
        this.onChangecommodities80 = this.onChangecommodities80.bind(this);
        this.onChangecommodities81 = this.onChangecommodities81.bind(this);
        this.onChangecommodities82 = this.onChangecommodities82.bind(this);
        this.onChangecommodities83 = this.onChangecommodities83.bind(this);
        this.onChangecommodities84 = this.onChangecommodities84.bind(this);
        this.onChangecommodities85 = this.onChangecommodities85.bind(this);
        this.onChangecommodities86 = this.onChangecommodities86.bind(this);
        this.onChangecommodities87 = this.onChangecommodities87.bind(this);
        this.onChangecommodities88 = this.onChangecommodities88.bind(this);
        this.onChangecommodities89 = this.onChangecommodities89.bind(this);
        this.onChangecommodities90 = this.onChangecommodities90.bind(this);
        this.onChangecommodities91 = this.onChangecommodities91.bind(this);
        this.onChangecommodities92 = this.onChangecommodities92.bind(this);
        this.onChangecommodities93 = this.onChangecommodities93.bind(this);
        this.onChangecommodities94 = this.onChangecommodities94.bind(this);
        this.onChangecommodities95 = this.onChangecommodities95.bind(this);
        this.onChangecommodities96 = this.onChangecommodities96.bind(this);
        this.onChangecommodities97 = this.onChangecommodities97.bind(this);
        this.onChangecommodities98 = this.onChangecommodities98.bind(this);
        this.onChangecommodities99 = this.onChangecommodities99.bind(this);
        this.onChangecommodities100 = this.onChangecommodities100.bind(this);
        this.onChangecommodities101 = this.onChangecommodities101.bind(this);
        this.onChangecommodities102 = this.onChangecommodities102.bind(this);
        this.onChangecommodities103 = this.onChangecommodities103.bind(this);
        this.onChangecommodities104 = this.onChangecommodities104.bind(this);
        this.onChangecommodities105 = this.onChangecommodities105.bind(this);
        this.onChangecommodities106 = this.onChangecommodities106.bind(this);
        this.onChangecommodities107 = this.onChangecommodities107.bind(this);
        this.onChangecommodities108 = this.onChangecommodities108.bind(this);
        this.onChangecommodities109 = this.onChangecommodities109.bind(this);
        this.onChangecommodities110 = this.onChangecommodities110.bind(this);
        this.onChangecommodities111 = this.onChangecommodities111.bind(this);
        this.onChangecommodities112 = this.onChangecommodities112.bind(this);
        this.onChangecommodities113 = this.onChangecommodities113.bind(this);
        this.onChangecommodities114 = this.onChangecommodities114.bind(this);
        this.onChangecommodities115 = this.onChangecommodities115.bind(this);
        this.onChangecommodities116 = this.onChangecommodities116.bind(this);
        this.onChangecommodities117 = this.onChangecommodities117.bind(this);
        this.onChangecommodities118 = this.onChangecommodities118.bind(this);
        this.onChangecommodities119 = this.onChangecommodities119.bind(this);
        this.onChangecommodities120 = this.onChangecommodities120.bind(this);
        this.onChangecommodities121 = this.onChangecommodities121.bind(this);
        this.onChangecommodities122 = this.onChangecommodities122.bind(this);
        this.onChangecommodities123 = this.onChangecommodities123.bind(this);
        this.onChangecommodities124 = this.onChangecommodities124.bind(this);
        this.onChangecommodities125 = this.onChangecommodities125.bind(this);
        this.onChangecommodities126 = this.onChangecommodities126.bind(this);
        this.onChangecommodities127 = this.onChangecommodities127.bind(this);
        this.onChangecommodities128 = this.onChangecommodities128.bind(this);
        this.onChangecommodities129 = this.onChangecommodities129.bind(this);
        this.onChangecommodities130 = this.onChangecommodities130.bind(this);
        this.onChangecommodities131 = this.onChangecommodities131.bind(this);
        this.onChangecommodities132 = this.onChangecommodities132.bind(this);
        this.onChangecommodities133 = this.onChangecommodities133.bind(this);
        this.onChangecommodities134 = this.onChangecommodities134.bind(this);
        this.onChangecommodities135 = this.onChangecommodities135.bind(this);
        this.onChangecommodities136 = this.onChangecommodities136.bind(this);
        this.onChangecommodities137 = this.onChangecommodities137.bind(this);
        this.onChangecommodities138 = this.onChangecommodities138.bind(this);
        this.onChangecommodities139 = this.onChangecommodities139.bind(this);
        this.onChangecommodities140 = this.onChangecommodities140.bind(this);
        this.onChangecommodities141 = this.onChangecommodities141.bind(this);
        this.onChangecommodities142 = this.onChangecommodities142.bind(this);
        this.onChangecommodities143 = this.onChangecommodities143.bind(this);
        this.onChangecommodities144 = this.onChangecommodities144.bind(this);
        this.onChangecommodities145 = this.onChangecommodities145.bind(this);
        this.onChangecommodities146 = this.onChangecommodities146.bind(this);
        this.onChangecommodities147 = this.onChangecommodities147.bind(this);
        this.onChangecommodities148 = this.onChangecommodities148.bind(this);
        this.onChangecommodities149 = this.onChangecommodities149.bind(this);
        this.onChangecommodities150 = this.onChangecommodities150.bind(this);
        this.onChangecommodities151 = this.onChangecommodities151.bind(this);
        this.onChangecommodities152 = this.onChangecommodities152.bind(this);
        this.onChangecommodities153 = this.onChangecommodities153.bind(this);
        this.onChangecommodities154 = this.onChangecommodities154.bind(this);
        this.onChangecommodities155 = this.onChangecommodities155.bind(this);
        this.onChangecommodities156 = this.onChangecommodities156.bind(this);
        this.onChangecommodities157 = this.onChangecommodities157.bind(this);
        this.onChangecommodities158 = this.onChangecommodities158.bind(this);
        this.onChangecommodities159 = this.onChangecommodities159.bind(this);
        this.onChangecommodities160 = this.onChangecommodities160.bind(this);
        this.onChangecommodities161 = this.onChangecommodities161.bind(this);
        this.onChangecommodities162 = this.onChangecommodities162.bind(this);
        this.onChangecommodities163 = this.onChangecommodities163.bind(this);
        this.onChangecommodities164 = this.onChangecommodities164.bind(this);
        this.onChangecommodities165 = this.onChangecommodities165.bind(this);
        this.onChangecommodities166 = this.onChangecommodities166.bind(this);
        this.onChangecommodities167 = this.onChangecommodities167.bind(this);
        this.onChangecommodities168 = this.onChangecommodities168.bind(this);
        this.onChangecommodities169 = this.onChangecommodities169.bind(this);
        this.onChangecommodities170 = this.onChangecommodities170.bind(this);
        this.onChangecommodities171 = this.onChangecommodities171.bind(this);
        this.onChangecommodities172 = this.onChangecommodities172.bind(this);
        this.onChangecommodities173 = this.onChangecommodities173.bind(this);
        this.onChangecommodities174 = this.onChangecommodities174.bind(this);
        this.onChangecommodities175 = this.onChangecommodities175.bind(this);
        this.onChangecommodities176 = this.onChangecommodities176.bind(this);
        this.onChangecommodities177 = this.onChangecommodities177.bind(this);
        this.onChangecommodities178 = this.onChangecommodities178.bind(this);
        this.onChangecommodities179 = this.onChangecommodities179.bind(this);
        this.onChangecommodities180 = this.onChangecommodities180.bind(this);
        this.onChangecommodities182 = this.onChangecommodities182.bind(this);
        this.onChangecommodities183 = this.onChangecommodities183.bind(this);
        this.onChangecommodities184 = this.onChangecommodities184.bind(this);
        this.onChangecommodities185 = this.onChangecommodities185.bind(this);
        this.onChangecommodities186 = this.onChangecommodities186.bind(this);
        this.onChangecommodities187 = this.onChangecommodities187.bind(this);
        this.onChangecommodities188 = this.onChangecommodities188.bind(this);
        this.onChangecommodities189 = this.onChangecommodities189.bind(this);
        this.onChangecommodities190 = this.onChangecommodities190.bind(this);
        this.onChangecommodities191 = this.onChangecommodities191.bind(this);
        this.onChangecommodities192 = this.onChangecommodities192.bind(this);
        this.onChangecommodities193 = this.onChangecommodities193.bind(this);
        this.onChangecommodities194 = this.onChangecommodities194.bind(this);
        this.onChangecommodities195 = this.onChangecommodities195.bind(this);
        this.onChangecommodities196 = this.onChangecommodities196.bind(this);
        this.onChangecommodities197 = this.onChangecommodities197.bind(this);
        this.onChangecommodities198 = this.onChangecommodities198.bind(this);
        this.onChangecommodities199 = this.onChangecommodities199.bind(this);
        this.onChangecommodities200 = this.onChangecommodities200.bind(this);
        this.onChangecommodities201 = this.onChangecommodities201.bind(this);
        this.onChangecommodities202 = this.onChangecommodities202.bind(this);
        this.onChangecommodities203 = this.onChangecommodities203.bind(this);
        this.onChangecommodities204 = this.onChangecommodities204.bind(this);
        this.onChangecommodities205 = this.onChangecommodities205.bind(this);
        this.onChangecommodities206 = this.onChangecommodities206.bind(this);
        this.onChangecommodities207 = this.onChangecommodities207.bind(this);
        this.onChangecommodities208 = this.onChangecommodities208.bind(this);
        this.onChangecommodities209 = this.onChangecommodities209.bind(this);
        this.onChangecommodities210 = this.onChangecommodities210.bind(this);
        this.onChangecommodities211 = this.onChangecommodities211.bind(this);
        this.onChangecommodities212 = this.onChangecommodities212.bind(this);
        this.onChangecommodities213 = this.onChangecommodities213.bind(this);
        this.onChangecommodities214 = this.onChangecommodities214.bind(this);
        this.onChangecommodities215 = this.onChangecommodities215.bind(this);
        this.onChangecommodities216 = this.onChangecommodities216.bind(this);
        this.onChangecommodities217 = this.onChangecommodities217.bind(this);
        this.onChangecommodities218 = this.onChangecommodities218.bind(this);
        this.onChangecommodities219 = this.onChangecommodities219.bind(this);
        this.onChangecommodities220 = this.onChangecommodities220.bind(this);
        this.onChangecommodities221 = this.onChangecommodities221.bind(this);
        this.onChangecommodities222 = this.onChangecommodities222.bind(this);
        this.onChangecommodities223 = this.onChangecommodities223.bind(this);
        this.onChangecommodities224 = this.onChangecommodities224.bind(this);
        this.onChangecommodities225 = this.onChangecommodities225.bind(this);
        this.onChangecommodities226 = this.onChangecommodities226.bind(this);
        this.onChangecommodities227 = this.onChangecommodities227.bind(this);
        this.onChangecommodities228 = this.onChangecommodities228.bind(this);
        this.onChangecommodities229 = this.onChangecommodities229.bind(this);
        this.onChangecommodities230 = this.onChangecommodities230.bind(this);
        this.onChangecommodities231 = this.onChangecommodities231.bind(this);
        this.onChangecommodities232 = this.onChangecommodities232.bind(this);
        this.onChangecommodities233 = this.onChangecommodities233.bind(this);
        this.onChangecommodities234 = this.onChangecommodities234.bind(this);
        this.onChangecommodities235 = this.onChangecommodities235.bind(this);
        this.onChangecommodities236 = this.onChangecommodities236.bind(this);
        this.onChangecommodities237 = this.onChangecommodities237.bind(this);
        this.onChangecommodities238 = this.onChangecommodities238.bind(this);
        this.onChangecommodities239 = this.onChangecommodities239.bind(this);
        this.onChangecommodities240 = this.onChangecommodities240.bind(this);
        this.onChangecommodities241 = this.onChangecommodities241.bind(this);
        this.onChangecommodities242 = this.onChangecommodities242.bind(this);
        this.onChangecommodities243 = this.onChangecommodities243.bind(this);
        this.onChangecommodities244 = this.onChangecommodities244.bind(this);
        this.onChangecommodities245 = this.onChangecommodities245.bind(this);
        this.onChangecommodities246 = this.onChangecommodities246.bind(this);
        this.onChangecommodities247 = this.onChangecommodities247.bind(this);
        this.onChangecommodities248 = this.onChangecommodities248.bind(this);
        this.onChangecommodities249 = this.onChangecommodities249.bind(this);
        this.onChangecommodities250 = this.onChangecommodities250.bind(this);
        this.onChangecommodities251 = this.onChangecommodities251.bind(this);
        this.onChangecommodities252 = this.onChangecommodities252.bind(this);
        this.onChangecommodities253 = this.onChangecommodities253.bind(this);
        this.onChangecommodities254 = this.onChangecommodities254.bind(this);
        this.onChangecommodities255 = this.onChangecommodities255.bind(this);
        this.onChangecommodities256 = this.onChangecommodities256.bind(this);
        this.onChangecommodities257 = this.onChangecommodities257.bind(this);
        this.onChangecommodities258 = this.onChangecommodities258.bind(this);
        this.onChangecommodities259 = this.onChangecommodities259.bind(this);
        this.onChangecommodities260 = this.onChangecommodities260.bind(this);
        this.onChangecommodities261 = this.onChangecommodities261.bind(this);
        this.onChangecommodities262 = this.onChangecommodities262.bind(this);
        this.onChangecommodities263 = this.onChangecommodities263.bind(this);
        this.onChangecommodities264 = this.onChangecommodities264.bind(this);
        this.onChangecommodities265 = this.onChangecommodities265.bind(this);
        this.onChangecommodities266 = this.onChangecommodities266.bind(this);
        this.onChangecommodities267 = this.onChangecommodities268.bind(this);
        this.onChangecommodities268 = this.onChangecommodities268.bind(this);
        this.onChangecommodities269 = this.onChangecommodities269.bind(this);
        this.onChangecommodities270 = this.onChangecommodities271.bind(this);
        this.onChangecommodities271 = this.onChangecommodities271.bind(this);
        this.onChangecommodities272 = this.onChangecommodities272.bind(this);
        this.onChangecommodities273 = this.onChangecommodities273.bind(this);
        this.onChangecommodities274 = this.onChangecommodities274.bind(this);
        this.onChangecommodities275 = this.onChangecommodities275.bind(this);
        this.onChangecommodities276 = this.onChangecommodities276.bind(this);
        this.onChangecommodities277 = this.onChangecommodities277.bind(this);
        this.onChangecommodities278 = this.onChangecommodities278.bind(this);
        this.onChangecommodities279 = this.onChangecommodities279.bind(this);
        this.onChangecommodities280 = this.onChangecommodities280.bind(this);
        this.onChangecommodities281 = this.onChangecommodities281.bind(this);
        this.onChangecommodities282 = this.onChangecommodities282.bind(this);
        this.onChangecommodities283 = this.onChangecommodities283.bind(this);
        this.onChangecommodities284 = this.onChangecommodities284.bind(this);
        this.onChangecommodities285 = this.onChangecommodities285.bind(this);
        this.onChangecommodities286 = this.onChangecommodities286.bind(this);
        this.onChangecommodities287 = this.onChangecommodities287.bind(this);
        this.onChangecommodities288 = this.onChangecommodities288.bind(this);
        this.onChangecommodities289 = this.onChangecommodities289.bind(this);
        this.onChangecommodities290 = this.onChangecommodities290.bind(this);
        this.onChangecommodities291 = this.onChangecommodities291.bind(this);
        this.onChangecommodities292 = this.onChangecommodities292.bind(this);
        this.onChangecommodities293 = this.onChangecommodities293.bind(this);
        this.onChangecommodities294 = this.onChangecommodities294.bind(this);
        // this.onChangecommodities295 = this.onChangecommodities295.bind(this);
        // this.onChangecommodities296 = this.onChangecommodities296.bind(this);
        // this.onChangecommodities297 = this.onChangecommodities297.bind(this);
        // this.onChangecommodities298 = this.onChangecommodities298.bind(this);
        // this.onChangecommodities299 = this.onChangecommodities299.bind(this);
        // this.onChangecommodities300 = this.onChangecommodities300.bind(this);
        // this.onChangecommodities301 = this.onChangecommodities301.bind(this);
        // this.onChangecommodities302 = this.onChangecommodities302.bind(this);
        // this.onChangecommodities303 = this.onChangecommodities303.bind(this);
        // this.onChangecommodities304 = this.onChangecommodities304.bind(this);
        // this.onChangecommodities305 = this.onChangecommodities305.bind(this);
        // this.onChangecommodities306 = this.onChangecommodities306.bind(this);
        // this.onChangecommodities307 = this.onChangecommodities307.bind(this);
        // this.onChangecommodities308 = this.onChangecommodities308.bind(this);
        // this.onChangecommodities309 = this.onChangecommodities309.bind(this);
        // this.onChangecommodities310 = this.onChangecommodities310.bind(this);
        // this.onChangecommodities311 = this.onChangecommodities311.bind(this);
        // this.onChangecommodities312 = this.onChangecommodities312.bind(this);
        // this.onChangecommodities313 = this.onChangecommodities313.bind(this);
        // this.onChangecommodities314 = this.onChangecommodities314.bind(this);
        // this.onChangecommodities315 = this.onChangecommodities315.bind(this);
        // this.onChangecommodities316 = this.onChangecommodities316.bind(this);
        // this.onChangecommodities317 = this.onChangecommodities317.bind(this);
        // this.onChangecommodities318 = this.onChangecommodities318.bind(this);
        // this.onChangecommodities319 = this.onChangecommodities319.bind(this);
        // this.onChangecommodities320 = this.onChangecommodities320.bind(this);
        // this.onChangecommodities321 = this.onChangecommodities321.bind(this);
        // this.onChangecommodities322 = this.onChangecommodities322.bind(this);
        // this.onChangecommodities323 = this.onChangecommodities323.bind(this);
        // this.onChangecommodities324 = this.onChangecommodities324.bind(this);
        // this.onChangecommodities325 = this.onChangecommodities325.bind(this);
        // this.onChangecommodities325 = this.onChangecommodities325.bind(this);
        // this.onChangecommodities326 = this.onChangecommodities326.bind(this);
        // this.onChangecommodities327 = this.onChangecommodities327.bind(this);
        // this.onChangecommodities328 = this.onChangecommodities328.bind(this);
        // this.onChangecommodities329 = this.onChangecommodities329.bind(this);
        // this.onChangecommodities330 = this.onChangecommodities330.bind(this);
        // this.onChangecommodities331 = this.onChangecommodities331.bind(this);
        // this.onChangecommodities332 = this.onChangecommodities332.bind(this);
        // this.onChangecommodities333 = this.onChangecommodities333.bind(this);
        // this.onChangecommodities334 = this.onChangecommodities334.bind(this);
        // this.onChangecommodities335 = this.onChangecommodities335.bind(this);
        // this.onChangecommodities336 = this.onChangecommodities336.bind(this);
        // this.onChangecommodities337 = this.onChangecommodities337.bind(this);
        // this.onChangecommodities338 = this.onChangecommodities338.bind(this);
        // this.onChangecommodities339 = this.onChangecommodities339.bind(this);
        // this.onChangecommodities340 = this.onChangecommodities340.bind(this);
        // this.onChangecommodities341 = this.onChangecommodities341.bind(this);
        // this.onChangecommodities342 = this.onChangecommodities342.bind(this);
        // this.onChangecommodities343 = this.onChangecommodities343.bind(this);
        // this.onChangecommodities344 = this.onChangecommodities344.bind(this);
        // this.onChangecommodities345 = this.onChangecommodities345.bind(this);
        
        
        this.onChangename = this.onChangename.bind(this);
        this.onChangephoneno = this.onChangephoneno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
        this.onSubmit3 = this.onSubmit3.bind(this);
        this.onSubmit4 = this.onSubmit4.bind(this);

        this.onChangeform3name = this.onChangeform3name.bind(this);
        this.onChangeform3phoneno = this.onChangeform3phoneno.bind(this);
        this.onChangeform3buyoptions1 = this.onChangeform3buyoptions1.bind(this);
        this.onChangeform3buyoptions2 = this.onChangeform3buyoptions2.bind(this);
        this.onChangeform3buyoptions3 = this.onChangeform3buyoptions3.bind(this);
        this.onChangeform3buyoptions4 = this.onChangeform3buyoptions4.bind(this);
        this.onChangeform3buyoptions5 = this.onChangeform3buyoptions5.bind(this);
        this.onChangeform3buyoptions6 = this.onChangeform3buyoptions6.bind(this);
        this.onChangeform3buyoptions7 = this.onChangeform3buyoptions7.bind(this);
        this.onChangeform3buyoptions8 = this.onChangeform3buyoptions8.bind(this);
        this.onChangeform3buyoptions9 = this.onChangeform3buyoptions9.bind(this);
        this.onChangeform3buyoptions10 = this.onChangeform3buyoptions10.bind(this);
        this.onChangeform3buyoptions11 = this.onChangeform3buyoptions11.bind(this);
        this.onChangeform3buyoptions12 = this.onChangeform3buyoptions12.bind(this);
        this.onChangeform3buyoptions13 = this.onChangeform3buyoptions13.bind(this);
        this.onChangeform3buyoptions14 = this.onChangeform3buyoptions14.bind(this);
        this.onChangeform3buyoptions15 = this.onChangeform3buyoptions15.bind(this);
        this.onChangeform3buyoptions16 = this.onChangeform3buyoptions16.bind(this);
        this.onChangeform3buyoptions17 = this.onChangeform3buyoptions17.bind(this);
        this.onChangeform3buyoptions18 = this.onChangeform3buyoptions18.bind(this);
        this.onChangeform3buyoptions19 = this.onChangeform3buyoptions19.bind(this);
        this.onChangeform3buyoptions20 = this.onChangeform3buyoptions20.bind(this);
        this.onChangeform3buyoptions21 = this.onChangeform3buyoptions21.bind(this);
        this.onChangeform3buyoptions22 = this.onChangeform3buyoptions22.bind(this);
        this.onChangeform3buyoptions23 = this.onChangeform3buyoptions23.bind(this);
        this.onChangeform3buyoptions24 = this.onChangeform3buyoptions24.bind(this);
        this.onChangeform3buyoptions25 = this.onChangeform3buyoptions25.bind(this);
        this.onChangeform3buyoptions26 = this.onChangeform3buyoptions26.bind(this);
        this.onChangeform3buyoptions27 = this.onChangeform3buyoptions27.bind(this);
        this.onChangeform3buyoptions28 = this.onChangeform3buyoptions28.bind(this);
        this.onChangeform3buyoptions29 = this.onChangeform3buyoptions29.bind(this);
        this.onChangeform3buyoptions30 = this.onChangeform3buyoptions30.bind(this);
        this.onChangeform3buyoptions31 = this.onChangeform3buyoptions31.bind(this);
        this.onChangeform3buyoptions32 = this.onChangeform3buyoptions32.bind(this);
        this.onChangeform3buyoptions33 = this.onChangeform3buyoptions33.bind(this);
        this.onChangeform3buyoptions34 = this.onChangeform3buyoptions34.bind(this);
        this.onChangeform3buyoptions35 = this.onChangeform3buyoptions35.bind(this);
        this.onChangeform3buyoptions36 = this.onChangeform3buyoptions36.bind(this);
        this.onChangeform3buyoptions37 = this.onChangeform3buyoptions37.bind(this);
        this.onChangeform3buyoptions38 = this.onChangeform3buyoptions38.bind(this);
        this.onChangeform3buyoptions39 = this.onChangeform3buyoptions39.bind(this);
        this.onChangeform3buyoptions40 = this.onChangeform3buyoptions40.bind(this);
        this.onChangeform3buyoptions41 = this.onChangeform3buyoptions41.bind(this);
        this.onChangeform3buyoptions42 = this.onChangeform3buyoptions42.bind(this);
        this.onChangeform3buyoptions43 = this.onChangeform3buyoptions43.bind(this);
        this.onChangeform3buyoptions44 = this.onChangeform3buyoptions44.bind(this);
        this.onChangeform3buyoptions45 = this.onChangeform3buyoptions45.bind(this);
        this.onChangeform3buyoptions46 = this.onChangeform3buyoptions46.bind(this);
        this.onChangeform3buyoptions47 = this.onChangeform3buyoptions47.bind(this);
        this.onChangeform3buyoptions48 = this.onChangeform3buyoptions48.bind(this);
        this.onChangeform3buyoptions49 = this.onChangeform3buyoptions49.bind(this);
        this.onChangeform3buyoptions50 = this.onChangeform3buyoptions50.bind(this);
        this.onChangeform3buyoptions51 = this.onChangeform3buyoptions51.bind(this);
        this.onChangeform3buyoptions52 = this.onChangeform3buyoptions52.bind(this);
        this.onChangeform3buyoptions53 = this.onChangeform3buyoptions53.bind(this);
        this.onChangeform3buyoptions54 = this.onChangeform3buyoptions54.bind(this);
        this.onChangeform3buyoptions55 = this.onChangeform3buyoptions55.bind(this);
        this.onChangeform3buyoptions56 = this.onChangeform3buyoptions56.bind(this);
        this.onChangeform3buyoptions57 = this.onChangeform3buyoptions57.bind(this);
        this.onChangeform3buyoptions58 = this.onChangeform3buyoptions58.bind(this);
        this.onChangeform3buyoptions59 = this.onChangeform3buyoptions59.bind(this);
        this.onChangeform3buyoptions60 = this.onChangeform3buyoptions60.bind(this);
        this.onChangeform3buyoptions61 = this.onChangeform3buyoptions61.bind(this);
        this.onChangeform3buyoptions62 = this.onChangeform3buyoptions62.bind(this);
        this.onChangeform3buyoptions63 = this.onChangeform3buyoptions63.bind(this);
        this.onChangeform3buyoptions64 = this.onChangeform3buyoptions64.bind(this);
        this.onChangeform3buyoptions65 = this.onChangeform3buyoptions65.bind(this);
        this.onChangeform3buyoptions66 = this.onChangeform3buyoptions66.bind(this);
        this.onChangeform3buyoptions67 = this.onChangeform3buyoptions67.bind(this);
        this.onChangeform3buyoptions68 = this.onChangeform3buyoptions68.bind(this);
        this.onChangeform3buyoptions69 = this.onChangeform3buyoptions69.bind(this);
        this.onChangeform3buyoptions70 = this.onChangeform3buyoptions70.bind(this);
        this.onChangeform3buyoptions71 = this.onChangeform3buyoptions71.bind(this);
        this.onChangeform3buyoptions72 = this.onChangeform3buyoptions72.bind(this);
        this.onChangeform3buyoptions73 = this.onChangeform3buyoptions73.bind(this);
        this.onChangeform3buyoptions74 = this.onChangeform3buyoptions74.bind(this);
        this.onChangeform3buyoptions75 = this.onChangeform3buyoptions75.bind(this);
        this.onChangeform3buyoptions76 = this.onChangeform3buyoptions76.bind(this);
        this.onChangeform3buyoptions77 = this.onChangeform3buyoptions77.bind(this);
        this.onChangeform3buyoptions78 = this.onChangeform3buyoptions78.bind(this);
        this.onChangeform3buyoptions79 = this.onChangeform3buyoptions79.bind(this);
        this.onChangeform3buyoptions80 = this.onChangeform3buyoptions80.bind(this);
        this.onChangeform3buyoptions81 = this.onChangeform3buyoptions81.bind(this);
        this.onChangeform3buyoptions82 = this.onChangeform3buyoptions82.bind(this);
        this.onChangeform3buyoptions83 = this.onChangeform3buyoptions83.bind(this);
        this.onChangeform3buyoptions84 = this.onChangeform3buyoptions84.bind(this);
        this.onChangeform3buyoptions85 = this.onChangeform3buyoptions85.bind(this);
        this.onChangeform3buyoptions86 = this.onChangeform3buyoptions86.bind(this);
        this.onChangeform3buyoptions87 = this.onChangeform3buyoptions87.bind(this);
        this.onChangeform3buyoptions88 = this.onChangeform3buyoptions88.bind(this);
        this.onChangeform3buyoptions89 = this.onChangeform3buyoptions89.bind(this);
        this.onChangeform3buyoptions90 = this.onChangeform3buyoptions90.bind(this);
        this.onChangeform3buyoptions91 = this.onChangeform3buyoptions91.bind(this);
        this.onChangeform3buyoptions92 = this.onChangeform3buyoptions92.bind(this);
        this.onChangeform3buyoptions93 = this.onChangeform3buyoptions93.bind(this);
        this.onChangeform3buyoptions94 = this.onChangeform3buyoptions94.bind(this);
        this.onChangeform3buyoptions95 = this.onChangeform3buyoptions95.bind(this);
        this.onChangeform3buyoptions96 = this.onChangeform3buyoptions96.bind(this);
        this.onChangeform3buyoptions97 = this.onChangeform3buyoptions97.bind(this);
        this.onChangeform3buyoptions98 = this.onChangeform3buyoptions98.bind(this);
        this.onChangeform3buyoptions99 = this.onChangeform3buyoptions99.bind(this);
        this.onChangeform3buyoptions100 = this.onChangeform3buyoptions100.bind(this);
        this.onChangeform3buyoptions101 = this.onChangeform3buyoptions101.bind(this);
        this.onChangeform3buyoptions102 = this.onChangeform3buyoptions102.bind(this);
        this.onChangeform3buyoptions103 = this.onChangeform3buyoptions103.bind(this);
        this.onChangeform3buyoptions104 = this.onChangeform3buyoptions104.bind(this);
        this.onChangeform3buyoptions105 = this.onChangeform3buyoptions105.bind(this);
        this.onChangeform3buyoptions106 = this.onChangeform3buyoptions106.bind(this);
        this.onChangeform3buyoptions107 = this.onChangeform3buyoptions107.bind(this);
        this.onChangeform3buyoptions108 = this.onChangeform3buyoptions108.bind(this);
        this.onChangeform3buyoptions109 = this.onChangeform3buyoptions109.bind(this);
        this.onChangeform3buyoptions110 = this.onChangeform3buyoptions110.bind(this);
        this.onChangeform3buyoptions111 = this.onChangeform3buyoptions111.bind(this);
        this.onChangeform3buyoptions112 = this.onChangeform3buyoptions112.bind(this);
        this.onChangeform3buyoptions113 = this.onChangeform3buyoptions113.bind(this);
        this.onChangeform3buyoptions114 = this.onChangeform3buyoptions114.bind(this);
        this.onChangeform3buyoptions115 = this.onChangeform3buyoptions115.bind(this);
        this.onChangeform3buyoptions116 = this.onChangeform3buyoptions116.bind(this);
        this.onChangeform3buyoptions117 = this.onChangeform3buyoptions117.bind(this);
        this.onChangeform3buyoptions118 = this.onChangeform3buyoptions118.bind(this);
        this.onChangeform3buyoptions119 = this.onChangeform3buyoptions119.bind(this);
        this.onChangeform3buyoptions120 = this.onChangeform3buyoptions120.bind(this);
        this.onChangeform3buyoptions121 = this.onChangeform3buyoptions121.bind(this);
        this.onChangeform3buyoptions122 = this.onChangeform3buyoptions122.bind(this);
        this.onChangeform3buyoptions123 = this.onChangeform3buyoptions123.bind(this);
        this.onChangeform3buyoptions124 = this.onChangeform3buyoptions124.bind(this);
        this.onChangeform3buyoptions125 = this.onChangeform3buyoptions125.bind(this);
        this.onChangeform3buyoptions126 = this.onChangeform3buyoptions126.bind(this);
        this.onChangeform3buyoptions127 = this.onChangeform3buyoptions127.bind(this);
        this.onChangeform3buyoptions128 = this.onChangeform3buyoptions128.bind(this);
        this.onChangeform3buyoptions129 = this.onChangeform3buyoptions129.bind(this);
        this.onChangeform3buyoptions130 = this.onChangeform3buyoptions130.bind(this);
        this.onChangeform3buyoptions131 = this.onChangeform3buyoptions131.bind(this);
        this.onChangeform3buyoptions132 = this.onChangeform3buyoptions132.bind(this);
        this.onChangeform3buyoptions133 = this.onChangeform3buyoptions133.bind(this);
        this.onChangeform3buyoptions134 = this.onChangeform3buyoptions134.bind(this);
        this.onChangeform3buyoptions135 = this.onChangeform3buyoptions135.bind(this);
        this.onChangeform3buyoptions136 = this.onChangeform3buyoptions136.bind(this);
        this.onChangeform3buyoptions137 = this.onChangeform3buyoptions137.bind(this);
        this.onChangeform3buyoptions138 = this.onChangeform3buyoptions138.bind(this);
        this.onChangeform3buyoptions139 = this.onChangeform3buyoptions139.bind(this);
        this.onChangeform3buyoptions140 = this.onChangeform3buyoptions140.bind(this);
        this.onChangeform3buyoptions141 = this.onChangeform3buyoptions141.bind(this);
        this.onChangeform3buyoptions142 = this.onChangeform3buyoptions142.bind(this);
        this.onChangeform3buyoptions143 = this.onChangeform3buyoptions143.bind(this);
        this.onChangeform3buyoptions144 = this.onChangeform3buyoptions144.bind(this);
        this.onChangeform3buyoptions145 = this.onChangeform3buyoptions145.bind(this);
        this.onChangeform3buyoptions146 = this.onChangeform3buyoptions146.bind(this);
        this.onChangeform3buyoptions147 = this.onChangeform3buyoptions147.bind(this);
        this.onChangeform3buyoptions148 = this.onChangeform3buyoptions148.bind(this);
        this.onChangeform3buyoptions149 = this.onChangeform3buyoptions149.bind(this);
        this.onChangeform3buyoptions150 = this.onChangeform3buyoptions150.bind(this);
        this.onChangeform3buyoptions151 = this.onChangeform3buyoptions151.bind(this);
        this.onChangeform3buyoptions152 = this.onChangeform3buyoptions152.bind(this);
        this.onChangeform3buyoptions153 = this.onChangeform3buyoptions153.bind(this);
        this.onChangeform3buyoptions154 = this.onChangeform3buyoptions154.bind(this);
        this.onChangeform3buyoptions155 = this.onChangeform3buyoptions155.bind(this);
        this.onChangeform3buyoptions156 = this.onChangeform3buyoptions156.bind(this);
        this.onChangeform3buyoptions157 = this.onChangeform3buyoptions157.bind(this);
        this.onChangeform3buyoptions158 = this.onChangeform3buyoptions158.bind(this);
        this.onChangeform3buyoptions159 = this.onChangeform3buyoptions159.bind(this);
        this.onChangeform3buyoptions160 = this.onChangeform3buyoptions160.bind(this);
        this.onChangeform3buyoptions161 = this.onChangeform3buyoptions161.bind(this);
        this.onChangeform3buyoptions162 = this.onChangeform3buyoptions162.bind(this);
        this.onChangeform3buyoptions163 = this.onChangeform3buyoptions163.bind(this);
        this.onChangeform3buyoptions164 = this.onChangeform3buyoptions164.bind(this);
        this.onChangeform3buyoptions165 = this.onChangeform3buyoptions165.bind(this);
        this.onChangeform3buyoptions166 = this.onChangeform3buyoptions166.bind(this);
        this.onChangeform3buyoptions167 = this.onChangeform3buyoptions167.bind(this);
        this.onChangeform3buyoptions168 = this.onChangeform3buyoptions168.bind(this);
        this.onChangeform3buyoptions169 = this.onChangeform3buyoptions169.bind(this);
        this.onChangeform3buyoptions170 = this.onChangeform3buyoptions170.bind(this);
        this.onChangeform3buyoptions171 = this.onChangeform3buyoptions171.bind(this);
        this.onChangeform3buyoptions172 = this.onChangeform3buyoptions172.bind(this);
        this.onChangeform3buyoptions173 = this.onChangeform3buyoptions173.bind(this);
        this.onChangeform3buyoptions174 = this.onChangeform3buyoptions174.bind(this);
        this.onChangeform3buyoptions175 = this.onChangeform3buyoptions175.bind(this);
        this.onChangeform3buyoptions176 = this.onChangeform3buyoptions176.bind(this);
        this.onChangeform3buyoptions177 = this.onChangeform3buyoptions177.bind(this);
        this.onChangeform3buyoptions178 = this.onChangeform3buyoptions178.bind(this);
        this.onChangeform3buyoptions179 = this.onChangeform3buyoptions179.bind(this);
        this.onChangeform3buyoptions180 = this.onChangeform3buyoptions180.bind(this);
        this.onChangeform3buyoptions181 = this.onChangeform3buyoptions181.bind(this);
        this.onChangeform3buyoptions182 = this.onChangeform3buyoptions182.bind(this);
        this.onChangeform3buyoptions183 = this.onChangeform3buyoptions183.bind(this);
        this.onChangeform3buyoptions184 = this.onChangeform3buyoptions184.bind(this);
        this.onChangeform3buyoptions185 = this.onChangeform3buyoptions185.bind(this);
        this.onChangeform3buyoptions186 = this.onChangeform3buyoptions186.bind(this);
        this.onChangeform3buyoptions187 = this.onChangeform3buyoptions187.bind(this);
        this.onChangeform3buyoptions188 = this.onChangeform3buyoptions188.bind(this);
        this.onChangeform3buyoptions189 = this.onChangeform3buyoptions189.bind(this);
        this.onChangeform3buyoptions190 = this.onChangeform3buyoptions190.bind(this);
        this.onChangeform3buyoptions191 = this.onChangeform3buyoptions191.bind(this);
        this.onChangeform3buyoptions192 = this.onChangeform3buyoptions192.bind(this);
        this.onChangeform3buyoptions193 = this.onChangeform3buyoptions193.bind(this);
        this.onChangeform3buyoptions194 = this.onChangeform3buyoptions194.bind(this);
        this.onChangeform3buyoptions195 = this.onChangeform3buyoptions195.bind(this);
        this.onChangeform3buyoptions196 = this.onChangeform3buyoptions196.bind(this);
        this.onChangeform3buyoptions197 = this.onChangeform3buyoptions197.bind(this);
        this.onChangeform3buyoptions198 = this.onChangeform3buyoptions198.bind(this);
        this.onChangeform3buyoptions199 = this.onChangeform3buyoptions199.bind(this);
        this.onChangeform3buyoptions200 = this.onChangeform3buyoptions200.bind(this);
        this.onChangeform3buyoptions201 = this.onChangeform3buyoptions201.bind(this);
        this.onChangeform3buyoptions202 = this.onChangeform3buyoptions202.bind(this);
        this.onChangeform3buyoptions203 = this.onChangeform3buyoptions203.bind(this);
        this.onChangeform3buyoptions204 = this.onChangeform3buyoptions204.bind(this);
        this.onChangeform3buyoptions205 = this.onChangeform3buyoptions205.bind(this);
        this.onChangeform3buyoptions206 = this.onChangeform3buyoptions206.bind(this);
        this.onChangeform3buyoptions207 = this.onChangeform3buyoptions207.bind(this);
        this.onChangeform3buyoptions208 = this.onChangeform3buyoptions208.bind(this);
        this.onChangeform3buyoptions209 = this.onChangeform3buyoptions209.bind(this);
        this.onChangeform3buyoptions210 = this.onChangeform3buyoptions210.bind(this);
        this.onChangeform3buyoptions211 = this.onChangeform3buyoptions211.bind(this);
        this.onChangeform3buyoptions212 = this.onChangeform3buyoptions212.bind(this);
        this.onChangeform3buyoptions213 = this.onChangeform3buyoptions213.bind(this);
        this.onChangeform3buyoptions214 = this.onChangeform3buyoptions214.bind(this);
        this.onChangeform3buyoptions215 = this.onChangeform3buyoptions215.bind(this);
        this.onChangeform3buyoptions216 = this.onChangeform3buyoptions216.bind(this);
        this.onChangeform3buyoptions217 = this.onChangeform3buyoptions217.bind(this);
        this.onChangeform3buyoptions218 = this.onChangeform3buyoptions218.bind(this);
        this.onChangeform3buyoptions219 = this.onChangeform3buyoptions219.bind(this);
        this.onChangeform3buyoptions220 = this.onChangeform3buyoptions220.bind(this);
        this.onChangeform3buyoptions221 = this.onChangeform3buyoptions221.bind(this);
        this.onChangeform3buyoptions222 = this.onChangeform3buyoptions222.bind(this);
        this.onChangeform3buyoptions223 = this.onChangeform3buyoptions223.bind(this);
        this.onChangeform3buyoptions224 = this.onChangeform3buyoptions224.bind(this);
        this.onChangeform3buyoptions225 = this.onChangeform3buyoptions225.bind(this);
        this.onChangeform3buyoptions226 = this.onChangeform3buyoptions226.bind(this);
        this.onChangeform3buyoptions227 = this.onChangeform3buyoptions227.bind(this);
        this.onChangeform3buyoptions228 = this.onChangeform3buyoptions228.bind(this);
        this.onChangeform3buyoptions229 = this.onChangeform3buyoptions229.bind(this);
        this.onChangeform3buyoptions230 = this.onChangeform3buyoptions230.bind(this);
        this.onChangeform3buyoptions231 = this.onChangeform3buyoptions231.bind(this);
        this.onChangeform3buyoptions232 = this.onChangeform3buyoptions232.bind(this);
        this.onChangeform3buyoptions233 = this.onChangeform3buyoptions233.bind(this);
        this.onChangeform3buyoptions234 = this.onChangeform3buyoptions234.bind(this);
        this.onChangeform3buyoptions235 = this.onChangeform3buyoptions235.bind(this);
        this.onChangeform3buyoptions236 = this.onChangeform3buyoptions236.bind(this);
        this.onChangeform3buyoptions237 = this.onChangeform3buyoptions237.bind(this);
        this.onChangeform3buyoptions238 = this.onChangeform3buyoptions238.bind(this);
        this.onChangeform3buyoptions239 = this.onChangeform3buyoptions239.bind(this);
        this.onChangeform3buyoptions240 = this.onChangeform3buyoptions240.bind(this);
        this.onChangeform3buyoptions241 = this.onChangeform3buyoptions241.bind(this);
        this.onChangeform3buyoptions242 = this.onChangeform3buyoptions242.bind(this);
        this.onChangeform3buyoptions243 = this.onChangeform3buyoptions243.bind(this);
        this.onChangeform3buyoptions244 = this.onChangeform3buyoptions244.bind(this);
        this.onChangeform3buyoptions245 = this.onChangeform3buyoptions245.bind(this);
        this.onChangeform3buyoptions246 = this.onChangeform3buyoptions246.bind(this);
        this.onChangeform3buyoptions247 = this.onChangeform3buyoptions247.bind(this);
        this.onChangeform3buyoptions248 = this.onChangeform3buyoptions248.bind(this);
        this.onChangeform3buyoptions249 = this.onChangeform3buyoptions249.bind(this);
        this.onChangeform3buyoptions250 = this.onChangeform3buyoptions250.bind(this);
        this.onChangeform3buyoptions251 = this.onChangeform3buyoptions251.bind(this);
        this.onChangeform3buyoptions252 = this.onChangeform3buyoptions252.bind(this);
        this.onChangeform3buyoptions253 = this.onChangeform3buyoptions253.bind(this);
        this.onChangeform3buyoptions254 = this.onChangeform3buyoptions254.bind(this);
        this.onChangeform3buyoptions255 = this.onChangeform3buyoptions255.bind(this);
        this.onChangeform3buyoptions256 = this.onChangeform3buyoptions256.bind(this);
        this.onChangeform3buyoptions257 = this.onChangeform3buyoptions257.bind(this);
        this.onChangeform3buyoptions258 = this.onChangeform3buyoptions258.bind(this);
        this.onChangeform3buyoptions259 = this.onChangeform3buyoptions259.bind(this);
        this.onChangeform3buyoptions260 = this.onChangeform3buyoptions260.bind(this);
        this.onChangeform3buyoptions261 = this.onChangeform3buyoptions261.bind(this);
        this.onChangeform3buyoptions262 = this.onChangeform3buyoptions262.bind(this);
        this.onChangeform3buyoptions263 = this.onChangeform3buyoptions263.bind(this);
        this.onChangeform3buyoptions264 = this.onChangeform3buyoptions264.bind(this);
        this.onChangeform3buyoptions265 = this.onChangeform3buyoptions265.bind(this);
        this.onChangeform3buyoptions266 = this.onChangeform3buyoptions266.bind(this);
        this.onChangeform3buyoptions267 = this.onChangeform3buyoptions267.bind(this);
        this.onChangeform3buyoptions268 = this.onChangeform3buyoptions268.bind(this);
        this.onChangeform3buyoptions269 = this.onChangeform3buyoptions269.bind(this);
        this.onChangeform3buyoptions270 = this.onChangeform3buyoptions270.bind(this);
        this.onChangeform3buyoptions271 = this.onChangeform3buyoptions271.bind(this);
        this.onChangeform3buyoptions272 = this.onChangeform3buyoptions272.bind(this);
        this.onChangeform3buyoptions273 = this.onChangeform3buyoptions273.bind(this);
        this.onChangeform3buyoptions274 = this.onChangeform3buyoptions274.bind(this);
        this.onChangeform3buyoptions275 = this.onChangeform3buyoptions275.bind(this);
        this.onChangeform3buyoptions276 = this.onChangeform3buyoptions276.bind(this);
        this.onChangeform3buyoptions277 = this.onChangeform3buyoptions277.bind(this);
        this.onChangeform3buyoptions278 = this.onChangeform3buyoptions278.bind(this);
        this.onChangeform3buyoptions279 = this.onChangeform3buyoptions279.bind(this);
        this.onChangeform3buyoptions280 = this.onChangeform3buyoptions280.bind(this);
        this.onChangeform3buyoptions281 = this.onChangeform3buyoptions281.bind(this);
        this.onChangeform3buyoptions282 = this.onChangeform3buyoptions282.bind(this);
        this.onChangeform3buyoptions283 = this.onChangeform3buyoptions283.bind(this);
        this.onChangeform3buyoptions284 = this.onChangeform3buyoptions284.bind(this);
        this.onChangeform3buyoptions285 = this.onChangeform3buyoptions285.bind(this);
        this.onChangeform3buyoptions286 = this.onChangeform3buyoptions286.bind(this);
        this.onChangeform3buyoptions287 = this.onChangeform3buyoptions287.bind(this);
        this.onChangeform3buyoptions288 = this.onChangeform3buyoptions288.bind(this);
        this.onChangeform3buyoptions289 = this.onChangeform3buyoptions289.bind(this);
        this.onChangeform3buyoptions290 = this.onChangeform3buyoptions290.bind(this);
        this.onChangeform3buyoptions291 = this.onChangeform3buyoptions291.bind(this);
        this.onChangeform3buyoptions292 = this.onChangeform3buyoptions292.bind(this);
        this.onChangeform3buyoptions293 = this.onChangeform3buyoptions293.bind(this);
        this.onChangeform3buyoptions294 = this.onChangeform3buyoptions294.bind(this);
        
        
        
        
        
        
        this.onChangeform3city = this.onChangeform3city.bind(this);
        this.onChangeform3state = this.onChangeform3state.bind(this);

        this.onChangeform4name = this.onChangeform4name.bind(this);
        this.onChangeform4phoneno = this.onChangeform4phoneno.bind(this);
        this.onChangeform4serstate1 = this.onChangeform4serstate1.bind(this);
        this.onChangeform4serstate2 = this.onChangeform4serstate2.bind(this);
        this.onChangeform4serstate3 = this.onChangeform4serstate3.bind(this);
        this.onChangeform4serstate4 = this.onChangeform4serstate4.bind(this);
        this.onChangeform4serstate5 = this.onChangeform4serstate5.bind(this);
        this.onChangeform4serstate6 = this.onChangeform4serstate6.bind(this);
        this.onChangeform4serstate7 = this.onChangeform4serstate7.bind(this);
        this.onChangeform4serstate8 = this.onChangeform4serstate8.bind(this); 
        this.onChangeform4serstate9 = this.onChangeform4serstate9.bind(this);
        this.onChangeform4serstate10 = this.onChangeform4serstate10.bind(this);
        this.onChangeform4serstate11 = this.onChangeform4serstate11.bind(this);
        this.onChangeform4serstate12 = this.onChangeform4serstate12.bind(this); 
        this.onChangeform4serstate13 = this.onChangeform4serstate13.bind(this);
        this.onChangeform4serstate14 = this.onChangeform4serstate14.bind(this);
        this.onChangeform4serstate15 = this.onChangeform4serstate15.bind(this);
        this.onChangeform4serstate16 = this.onChangeform4serstate16.bind(this); 
        this.onChangeform4serstate17 = this.onChangeform4serstate17.bind(this);
        this.onChangeform4serstate18 = this.onChangeform4serstate18.bind(this);
        this.onChangeform4serstate19 = this.onChangeform4serstate19.bind(this);
        this.onChangeform4serstate20 = this.onChangeform4serstate20.bind(this); 
        this.onChangeform4serstate21 = this.onChangeform4serstate21.bind(this);
        this.onChangeform4serstate22 = this.onChangeform4serstate22.bind(this);
        this.onChangeform4serstate23 = this.onChangeform4serstate23.bind(this);
        this.onChangeform4serstate24 = this.onChangeform4serstate24.bind(this); 
        this.onChangeform4serstate25 = this.onChangeform4serstate25.bind(this);
        this.onChangeform4serstate26 = this.onChangeform4serstate26.bind(this);
        this.onChangeform4serstate27 = this.onChangeform4serstate27.bind(this);
        this.onChangeform4serstate28 = this.onChangeform4serstate28.bind(this); 
        this.onChangeform4serstate29 = this.onChangeform4serstate29.bind(this);
        this.onChangeform4serstate30 = this.onChangeform4serstate30.bind(this);
        this.onChangeform4serstate31 = this.onChangeform4serstate31.bind(this);
        this.onChangeform4serstate32 = this.onChangeform4serstate32.bind(this); 
        this.onChangeform4serstate33 = this.onChangeform4serstate33.bind(this);
        this.onChangeform4serstate34 = this.onChangeform4serstate34.bind(this);
        this.onChangeform4serstate35 = this.onChangeform4serstate35.bind(this);
         
        this.onChangeform4transcomp = this.onChangeform4transcomp.bind(this);
        this.onChangeform4city = this.onChangeform4city.bind(this);
        this.onChangeform4state = this.onChangeform4state.bind(this);



        this.onChangeform2name = this.onChangeform2name.bind(this);
        this.onChangeform2phoneno = this.onChangeform2phoneno.bind(this);
        this.onChangeform2organisation = this.onChangeform2organisation.bind(this);
        this.onChangeform2city = this.onChangeform2city.bind(this);
        this.onChangeform2state = this.onChangeform2state.bind(this);

        this.state = {
            form1_acres: '',
            form1_audit: '',
            form1_commodities1: '',
            form1_commodities2: '',
            form1_commodities3: '',
            form1_commodities4: '',
            form1_commodities5: '',
            form1_commodities6: '',
            form1_commodities7: '',
            form1_commodities8: '',
            form1_commodities9: '',
            form1_commodities10: '',
            form1_commodities11: '',
            form1_commodities12: '',
            form1_commodities13: '',
            form1_commodities14: '',
            form1_commodities15: '',
            form1_commodities16: '',
            form1_commodities17: '',
            form1_commodities18: '',
            form1_commodities19: '',
            form1_commodities20: '',
            form1_commodities21: '',
            form1_commodities22: '',
            form1_commodities23: '',
            form1_commodities24: '',
            form1_commodities25: '',
            form1_commodities26: '',
            form1_commodities27: '',
            form1_commodities28: '',
            form1_commodities29: '',
            form1_commodities30: '',
            form1_commodities31: '',
            form1_commodities32: '',
            form1_commodities33: '',
            form1_commodities34: '',
            form1_commodities35: '',
            form1_commodities36: '',
            form1_commodities37: '',
            form1_commodities38: '',
            form1_commodities39: '',
            form1_commodities40: '',
            form1_commodities41: '',
            form1_commodities42: '',
            form1_commodities43: '',
            form1_commodities44: '',
            form1_commodities45: '',
            form1_commodities46: '',
            form1_commodities47: '',
            form1_commodities48: '',
            form1_commodities49: '',
            form1_commodities50: '',
            form1_commodities51: '',
            form1_commodities52: '',
            form1_commodities53: '',
            form1_commodities54: '',
            form1_commodities55: '',
            form1_commodities56: '',
            form1_commodities57: '',
            form1_commodities58: '',
            form1_commodities59: '',
            form1_commodities60: '',
            form1_commodities61: '',
            form1_commodities62: '',
            form1_commodities63: '',
            form1_commodities64: '',
            form1_commodities65: '',
            form1_commodities66: '',
            form1_commodities67: '',
            form1_commodities68: '',
            form1_commodities69: '',
            form1_commodities70: '',
            form1_commodities71: '',
            form1_commodities72: '',
            form1_commodities73: '',
            form1_commodities74: '',
            form1_commodities75: '',
            form1_commodities76: '',
            form1_commodities77: '',
            form1_commodities78: '',
            form1_commodities79: '',
            form1_commodities80: '',
            form1_commodities81: '',
            form1_commodities82: '',
            form1_commodities83: '',
            form1_commodities84: '',
            form1_commodities85: '',
            form1_commodities86: '',
            form1_commodities87: '',
            form1_commodities88: '',
            form1_commodities89: '',
            form1_commodities90: '',
            form1_commodities91: '',
            form1_commodities92: '',
            form1_commodities93: '',
            form1_commodities94: '',
            form1_commodities95: '',
            form1_commodities96: '',
            form1_commodities97: '',
            form1_commodities98: '',
            form1_commodities99: '',
            form1_commodities100: '',
            form1_commodities101: '',
            form1_commodities102: '',
            form1_commodities103: '',
            form1_commodities104: '',
            form1_commodities105: '',
            form1_commodities106: '',
            form1_commodities107: '',
            form1_commodities108: '',
            form1_commodities109: '',
            form1_commodities110: '',
            form1_commodities111: '',
            form1_commodities112: '',
            form1_commodities113: '',
            form1_commodities114: '',
            form1_commodities115: '',
            form1_commodities116: '',
            form1_commodities117: '',
            form1_commodities118: '',
            form1_commodities119: '',
            form1_commodities120: '',
            form1_commodities121: '',
            form1_commodities122: '',
            form1_commodities123: '',
            form1_commodities124: '',
            form1_commodities125: '',
            form1_commodities126: '',
            form1_commodities127: '',
            form1_commodities128: '',
            form1_commodities129: '',
            form1_commodities130: '',
            form1_commodities131: '',
            form1_commodities132: '',
            form1_commodities133: '',
            form1_commodities134: '',
            form1_commodities135: '',
            form1_commodities136: '',
            form1_commodities137: '',
            form1_commodities138: '',
            form1_commodities139: '',
            form1_commodities140: '',
            form1_commodities141: '',
            form1_commodities142: '',
            form1_commodities143: '',
            form1_commodities144: '',
            form1_commodities145: '',
            form1_commodities146: '',
            form1_commodities147: '',
            form1_commodities148: '',
            form1_commodities149: '',
            form1_commodities150: '',
            form1_commodities151: '',
            form1_commodities152: '',
            form1_commodities153: '',
            form1_commodities154: '',
            form1_commodities155: '',
            form1_commodities156: '',
            form1_commodities157: '',
            form1_commodities158: '',
            form1_commodities159: '',
            form1_commodities160: '',
            form1_commodities161: '',
            form1_commodities162: '',
            form1_commodities163: '',
            form1_commodities164: '',
            form1_commodities165: '',
            form1_commodities166: '',
            form1_commodities167: '',
            form1_commodities168: '',
            form1_commodities169: '',
            form1_commodities170: '',
            form1_commodities171: '',
            form1_commodities172: '',
            form1_commodities173: '',
            form1_commodities174: '',
            form1_commodities175: '',
            form1_commodities176: '',
            form1_commodities177: '',
            form1_commodities178: '',
            form1_commodities179: '',
            form1_commodities180: '',
            form1_commodities181: '',
            form1_commodities182: '',
            form1_commodities183: '',
            form1_commodities184: '',
            form1_commodities185: '',
            form1_commodities186: '',
            form1_commodities187: '',
            form1_commodities188: '',
            form1_commodities189: '',
            form1_commodities190: '',
            form1_commodities191: '',
            form1_commodities192: '',
            form1_commodities193: '',
            form1_commodities194: '',
            form1_commodities195: '',
            form1_commodities196: '',
            form1_commodities197: '',
            form1_commodities198: '',
            form1_commodities199: '',
            form1_commodities200: '',
            form1_commodities201: '',
            form1_commodities202: '',
            form1_commodities203: '',
            form1_commodities204: '',
            form1_commodities205: '',
            form1_commodities206: '',
            form1_commodities207: '',
            form1_commodities208: '',
            form1_commodities209: '',
            form1_commodities210: '',
            form1_commodities211: '',
            form1_commodities212: '',
            form1_commodities213: '',
            form1_commodities214: '',
            form1_commodities215: '',
            form1_commodities216: '',
            form1_commodities217: '',
            form1_commodities218: '',
            form1_commodities219: '',
            form1_commodities220: '',
            form1_commodities221: '',
            form1_commodities222: '',
            form1_commodities223: '',
            form1_commodities224: '',
            form1_commodities225: '',
            form1_commodities226: '',
            form1_commodities227: '',
            form1_commodities228: '',
            form1_commodities229: '',
            form1_commodities230: '',
            form1_commodities231: '',
            form1_commodities232: '',
            form1_commodities233: '',
            form1_commodities234: '',
            form1_commodities235: '',
            form1_commodities236: '',
            form1_commodities237: '',
            form1_commodities238: '',
            form1_commodities239: '',
            form1_commodities240: '',
            form1_commodities241: '',
            form1_commodities242: '',
            form1_commodities243: '',
            form1_commodities244: '',
            form1_commodities245: '',
            form1_commodities246: '',
            form1_commodities247: '',
            form1_commodities248: '',
            form1_commodities249: '',
            form1_commodities250: '',
            form1_commodities251: '',
            form1_commodities252: '',
            form1_commodities253: '',
            form1_commodities254: '',
            form1_commodities255: '',
            form1_commodities256: '',
            form1_commodities257: '',
            form1_commodities258: '',
            form1_commodities259: '',
            form1_commodities260: '',
            form1_commodities261: '',
            form1_commodities262: '',
            form1_commodities263: '',
            form1_commodities264: '',
            form1_commodities265: '',
            form1_commodities266: '',
            form1_commodities267: '',
            form1_commodities268: '',
            form1_commodities269: '',
            form1_commodities270: '',
            form1_commodities271: '',
            form1_commodities272: '',
            form1_commodities273: '',
            form1_commodities274: '',
            form1_commodities275: '',
            form1_commodities276: '',
            form1_commodities277: '',
            form1_commodities278: '',
            form1_commodities279: '',
            form1_commodities280: '',
            form1_commodities281: '',
            form1_commodities282: '',
            form1_commodities283: '',
            form1_commodities284: '',
            form1_commodities285: '',
            form1_commodities286: '',
            form1_commodities287: '',
            form1_commodities288: '',
            form1_commodities289: '',
            form1_commodities290: '',
            form1_commodities291: '',
            form1_commodities292: '',
            form1_commodities293: '',
            form1_commodities294: '',
            // form1_commodities295: '',
            // form1_commodities296: '',
            // form1_commodities297: '',
            // form1_commodities298: '',
            // form1_commodities299: '',
            // form1_commodities300: '',
            // form1_commodities301: '',
            // form1_commodities302: '',
            // form1_commodities303: '',
            // form1_commodities304: '',
            // form1_commodities305: '',
            // form1_commodities306: '',
            // form1_commodities307: '',
            // form1_commodities308: '',
            // form1_commodities309: '',
            // form1_commodities310: '',
            // form1_commodities311: '',
            // form1_commodities312: '',
            // form1_commodities313: '',
            // form1_commodities314: '',
            // form1_commodities315: '',
            // form1_commodities316: '',
            // form1_commodities317: '',
            // form1_commodities318: '',
            // form1_commodities319: '',
            // form1_commodities320: '',
            // form1_commodities321: '',
            // form1_commodities322: '',
            // form1_commodities323: '',
            // form1_commodities324: '',
            // form1_commodities325: '',
            // form1_commodities326: '',
            // form1_commodities327: '',
            // form1_commodities328: '',
            // form1_commodities329: '',
            // form1_commodities330: '',
            // form1_commodities331: '',
            // form1_commodities332: '',
            // form1_commodities333: '',
            // form1_commodities334: '',
            // form1_commodities335: '',
            // form1_commodities336: '',
            // form1_commodities337: '',
            // form1_commodities338: '',
            // form1_commodities339: '',
            // form1_commodities340: '',
            // form1_commodities341: '',
            // form1_commodities342: '',
            // form1_commodities343: '',
            // form1_commodities344: '',
            // form1_commodities345: '',

            form1_name: '',
            form1_phoneno: '',
            form1_completed: false,
        
            form2_name: '',
            form2_phoneno: '',
            form2_organisation: '',
            form2_city: '',
            form2_state: '',
            form2_completed: false,

            form3_name: '',
            form3_phoneno: '',
            form3_buyoptions1: '',
            form3_buyoptions2: '',
            form3_buyoptions3: '',
            form3_buyoptions4: '',
            form3_buyoptions5: '',
            form3_buyoptions6: '',
            form3_buyoptions7: '',
            form3_buyoptions8: '',
            form3_buyoptions9: '',
            form3_buyoptions10: '',
            form3_buyoptions11: '',
            form3_buyoptions12: '',
            form3_buyoptions13: '',
            form3_buyoptions14: '',
            form3_buyoptions15: '',
            form3_buyoptions16: '',
            form3_buyoptions17: '',
            form3_buyoptions18: '',
            form3_buyoptions19: '',
            form3_buyoptions20: '',
            form3_buyoptions21: '',
            form3_buyoptions22: '',
            form3_buyoptions23: '',
            form3_buyoptions24: '',
            form3_buyoptions25: '',
            form3_buyoptions26: '',
            form3_buyoptions27: '',
            form3_buyoptions28: '',
            form3_buyoptions29: '',
            form3_buyoptions30: '',
            form3_buyoptions31: '',
            form3_buyoptions32: '',
            form3_buyoptions33: '',
            form3_buyoptions34: '',
            form3_buyoptions35: '',
            form3_buyoptions36: '',
            form3_buyoptions37: '',
            form3_buyoptions38: '',
            form3_buyoptions39: '',
            form3_buyoptions40: '',
            form3_buyoptions41: '',
            form3_buyoptions42: '',
            form3_buyoptions43: '',
            form3_buyoptions44: '',
            form3_buyoptions45: '',
            form3_buyoptions46: '',
            form3_buyoptions47: '',
            form3_buyoptions48: '',
            form3_buyoptions49: '',
            form3_buyoptions50: '',
            form3_buyoptions51: '',
            form3_buyoptions52: '',
            form3_buyoptions53: '',
            form3_buyoptions54: '',
            form3_buyoptions55: '',
            form3_buyoptions56: '',
            form3_buyoptions57: '',
            form3_buyoptions58: '',
            form3_buyoptions59: '',
            form3_buyoptions60: '',
            form3_buyoptions61: '',
            form3_buyoptions62: '',
            form3_buyoptions63: '',
            form3_buyoptions64: '',
            form3_buyoptions65: '',
            form3_buyoptions66: '',
            form3_buyoptions67: '',
            form3_buyoptions68: '',
            form3_buyoptions69: '',
            form3_buyoptions70: '',
            form3_buyoptions71: '',
            form3_buyoptions72: '',
            form3_buyoptions73: '',
            form3_buyoptions74: '',
            form3_buyoptions75: '',
            form3_buyoptions76: '',
            form3_buyoptions77: '',
            form3_buyoptions78: '',
            form3_buyoptions79: '',
            form3_buyoptions80: '',
            form3_buyoptions81: '',
            form3_buyoptions82: '',
            form3_buyoptions83: '',
            form3_buyoptions84: '',
            form3_buyoptions85: '',
            form3_buyoptions86: '',
            form3_buyoptions87: '',
            form3_buyoptions88: '',
            form3_buyoptions89: '',
            form3_buyoptions90: '',
            form3_buyoptions91: '',
            form3_buyoptions92: '',
            form3_buyoptions93: '',
            form3_buyoptions94: '',
            form3_buyoptions95: '',
            form3_buyoptions96: '',
            form3_buyoptions97: '',
            form3_buyoptions98: '',
            form3_buyoptions99: '',
            form3_buyoptions100: '',
            form3_buyoptions101: '',
            form3_buyoptions102: '',
            form3_buyoptions103: '',
            form3_buyoptions104: '',
            form3_buyoptions105: '',
            form3_buyoptions106: '',
            form3_buyoptions107: '',
            form3_buyoptions108: '',
            form3_buyoptions109: '',
            form3_buyoptions110: '',
            form3_buyoptions111: '',
            form3_buyoptions112: '',
            form3_buyoptions113: '',
            form3_buyoptions114: '',
            form3_buyoptions115: '',
            form3_buyoptions116: '',
            form3_buyoptions117: '',
            form3_buyoptions118: '',
            form3_buyoptions119: '',
            form3_buyoptions120: '',
            form3_buyoptions121: '',
            form3_buyoptions122: '',
            form3_buyoptions123: '',
            form3_buyoptions124: '',
            form3_buyoptions125: '',
            form3_buyoptions126: '',
            form3_buyoptions127: '',
            form3_buyoptions128: '',
            form3_buyoptions129: '',
            form3_buyoptions130: '',
            form3_buyoptions131: '',
            form3_buyoptions132: '',
            form3_buyoptions133: '',
            form3_buyoptions134: '',
            form3_buyoptions135: '',
            form3_buyoptions136: '',
            form3_buyoptions137: '',
            form3_buyoptions138: '',
            form3_buyoptions139: '',
            form3_buyoptions140: '',
            form3_buyoptions141: '',
            form3_buyoptions142: '',
            form3_buyoptions143: '',
            form3_buyoptions144: '',
            form3_buyoptions145: '',
            form3_buyoptions146: '',
            form3_buyoptions147: '',
            form3_buyoptions148: '',
            form3_buyoptions149: '',
            form3_buyoptions150: '',
            form3_buyoptions151: '',
            form3_buyoptions152: '',
            form3_buyoptions153: '',
            form3_buyoptions154: '',
            form3_buyoptions155: '',
            form3_buyoptions156: '',
            form3_buyoptions157: '',
            form3_buyoptions158: '',
            form3_buyoptions159: '',
            form3_buyoptions160: '',
            form3_buyoptions161: '',
            form3_buyoptions162: '',
            form3_buyoptions163: '',
            form3_buyoptions164: '',
            form3_buyoptions165: '',
            form3_buyoptions166: '',
            form3_buyoptions167: '',
            form3_buyoptions168: '',
            form3_buyoptions169: '',
            form3_buyoptions170: '',
            form3_buyoptions171: '',
            form3_buyoptions172: '',
            form3_buyoptions173: '',
            form3_buyoptions174: '',
            form3_buyoptions175: '',
            form3_buyoptions176: '',
            form3_buyoptions177: '',
            form3_buyoptions178: '',
            form3_buyoptions179: '',
            form3_buyoptions180: '',
            form3_buyoptions181: '',
            form3_buyoptions182: '',
            form3_buyoptions183: '',
            form3_buyoptions184: '',
            form3_buyoptions185: '',
            form3_buyoptions186: '',
            form3_buyoptions187: '',
            form3_buyoptions188: '',
            form3_buyoptions189: '',
            form3_buyoptions190: '',
            form3_buyoptions191: '',
            form3_buyoptions192: '',
            form3_buyoptions193: '',
            form3_buyoptions194: '',
            form3_buyoptions195: '',
            form3_buyoptions196: '',
            form3_buyoptions197: '',
            form3_buyoptions198: '',
            form3_buyoptions199: '',
            form3_buyoptions200: '',
            form3_buyoptions201: '',
            form3_buyoptions202: '',
            form3_buyoptions203: '',
            form3_buyoptions204: '',
            form3_buyoptions205: '',
            form3_buyoptions206: '',
            form3_buyoptions207: '',
            form3_buyoptions208: '',
            form3_buyoptions209: '',
            form3_buyoptions210: '',
            form3_buyoptions211: '',
            form3_buyoptions212: '',
            form3_buyoptions213: '',
            form3_buyoptions214: '',
            form3_buyoptions215: '',
            form3_buyoptions216: '',
            form3_buyoptions217: '',
            form3_buyoptions218: '',
            form3_buyoptions219: '',
            form3_buyoptions220: '',
            form3_buyoptions221: '',
            form3_buyoptions222: '',
            form3_buyoptions223: '',
            form3_buyoptions224: '',
            form3_buyoptions225: '',
            form3_buyoptions226: '',
            form3_buyoptions227: '',
            form3_buyoptions228: '',
            form3_buyoptions229: '',
            form3_buyoptions230: '',
            form3_buyoptions231: '',
            form3_buyoptions232: '',
            form3_buyoptions233: '',
            form3_buyoptions234: '',
            form3_buyoptions235: '',
            form3_buyoptions236: '',
            form3_buyoptions237: '',
            form3_buyoptions238: '',
            form3_buyoptions239: '',
            form3_buyoptions240: '',
            form3_buyoptions241: '',
            form3_buyoptions242: '',
            form3_buyoptions243: '',
            form3_buyoptions244: '',
            form3_buyoptions245: '',
            form3_buyoptions246: '',
            form3_buyoptions247: '',
            form3_buyoptions248: '',
            form3_buyoptions249: '',
            form3_buyoptions250: '',
            form3_buyoptions251: '',
            form3_buyoptions252: '',
            form3_buyoptions253: '',
            form3_buyoptions254: '',
            form3_buyoptions255: '',
            form3_buyoptions256: '',
            form3_buyoptions257: '',
            form3_buyoptions258: '',
            form3_buyoptions259: '',
            form3_buyoptions260: '',
            form3_buyoptions261: '',
            form3_buyoptions262: '',
            form3_buyoptions263: '',
            form3_buyoptions264: '',
            form3_buyoptions265: '',
            form3_buyoptions266: '',
            form3_buyoptions267: '',
            form3_buyoptions268: '',
            form3_buyoptions269: '',
            form3_buyoptions270: '',
            form3_buyoptions271: '',
            form3_buyoptions272: '',
            form3_buyoptions273: '',
            form3_buyoptions274: '',
            form3_buyoptions275: '',
            form3_buyoptions276: '',
            form3_buyoptions277: '',
            form3_buyoptions278: '',
            form3_buyoptions279: '',
            form3_buyoptions280: '',
            form3_buyoptions281: '',
            form3_buyoptions282: '',
            form3_buyoptions283: '',
            form3_buyoptions284: '',
            form3_buyoptions285: '',
            form3_buyoptions286: '',
            form3_buyoptions287: '',
            form3_buyoptions288: '',
            form3_buyoptions289: '',
            form3_buyoptions290: '',
            form3_buyoptions291: '',
            form3_buyoptions292: '',
            form3_buyoptions293: '',
            form3_buyoptions294: '',
            
            
            
            form3_city: '',
            form3_state: '',
            form3_completed: false,

            form4_name: '',
            form4_phoneno: '',
            form4_serviceStates1: '',
            form4_serviceStates2: '',
            form4_serviceStates3: '',
            form4_serviceStates4: '',
            form4_serviceStates5: '',
            form4_serviceStates6: '',
            form4_serviceStates7: '',
            form4_serviceStates8: '',
            form4_serviceStates9: '',
            form4_serviceStates10: '',
            form4_serviceStates11: '',
            form4_serviceStates12: '',
            form4_serviceStates13: '',
            form4_serviceStates14: '',
            form4_serviceStates15: '',
            form4_serviceStates16: '',
            form4_serviceStates17: '',
            form4_serviceStates18: '',
            form4_serviceStates19: '',
            form4_serviceStates20: '',
            form4_serviceStates21: '',
            form4_serviceStates22: '',
            form4_serviceStates23: '',
            form4_serviceStates24: '',
            form4_serviceStates25: '',
            form4_serviceStates26: '',
            form4_serviceStates27: '',
            form4_serviceStates28: '',
            form4_serviceStates29: '',
            form4_serviceStates30: '',
            form4_serviceStates31: '',
            form4_serviceStates32: '',
            form4_serviceStates33: '',
            form4_serviceStates34: '',
            form4_serviceStates35: '',
            
            form4_transportationCompany: '',
            form4_city: '',
            form4_state: '',
            form3_completed: false
        }
        
    }
    handleClick1(){
      var inputCon = document.querySelector(".inputContainer1");
      var inputCon2 = document.querySelector(".inputContainer2");
      var inputCon3 = document.querySelector(".inputContainer3");
      var inputCon4 = document.querySelector(".inputContainer4");
      if (inputCon.style.display === "none") {
        inputCon.style.display = "block";
        inputCon2.style.display = "none";
        inputCon3.style.display = "none";
        inputCon4.style.display = "none";
      } else {
        inputCon.style.display = "none";
      }
    }
    handleClick2(){
      var inputCon2 = document.querySelector(".inputContainer2");
      var inputCon = document.querySelector(".inputContainer1");
      var inputCon3 = document.querySelector(".inputContainer3");
      var inputCon4 = document.querySelector(".inputContainer4");
      if (inputCon2.style.display === "none") {
        inputCon2.style.display = "block";
        inputCon.style.display = "none";
        inputCon3.style.display = "none";
        inputCon4.style.display = "none";
      } else {
        inputCon2.style.display = "none";
      }
    }
    handleClick3(){
      var inputCon3 = document.querySelector(".inputContainer3");
      var inputCon = document.querySelector(".inputContainer1");
      var inputCon2 = document.querySelector(".inputContainer2");
      var inputCon4 = document.querySelector(".inputContainer4");
      if (inputCon3.style.display === "none") {
        inputCon3.style.display = "block";
        inputCon.style.display = "none";
        inputCon2.style.display = "none";
        inputCon4.style.display = "none";
      } else {
        inputCon3.style.display = "none";
      }
    }
    handleClick4(){
      var inputCon4 = document.querySelector(".inputContainer4");
      var inputCon3 = document.querySelector(".inputContainer3");
      var inputCon = document.querySelector(".inputContainer1");
      var inputCon2 = document.querySelector(".inputContainer2");
      if (inputCon4.style.display === "none") {
        inputCon4.style.display = "block";
        inputCon.style.display = "none";
        inputCon3.style.display = "none";
        inputCon2.style.display = "none";
      } else {
        inputCon4.style.display = "none";
      }
    }
    

showCheckboxes(){
  var checkboxes = document.getElementById("checkBoxes");
  var show=true;
  if (show) {
    checkboxes.style.display = "block";
    show = false;
  } else {
    checkboxes.style.display = "none";
    show = true;
  }
}

showCheckboxes2(){
  var checkboxes2 = document.getElementById("checkBoxes2");
  var show2=true;
  if (show2) {
    checkboxes2.style.display = "block";
    show2 = false;
  } else {
    checkboxes2.style.display = "none";
    show2 = true;
  }
}

showCheckboxes3(){
  var checkboxes3 = document.getElementById("checkBoxes3");
  var show3=true;
  if (show3) {
    checkboxes3.style.display = "block";
    show3 = false;
  } else {
    checkboxes3.style.display = "none";
    show3 = true;
  }
}



onChangeacres(e) {
  this.setState({
    form1_acres: e.target.value
  });
}

onChangeaudit(e) {
  this.setState({
    form1_audit: e.target.value
  });
}

onChangecommodities1(e) {
  this.setState({
    form1_commodities1: e.target.value
  });
}
onChangecommodities2(e) {
  this.setState({
    form1_commodities2: e.target.value
  });
}
onChangecommodities3(e) {
  this.setState({
    form1_commodities3: e.target.value
  });
}
onChangecommodities4(e) {
  this.setState({
    form1_commodities4: e.target.value
  });
}
onChangecommodities5(e) {
  this.setState({
    form1_commodities5: e.target.value
  });
}
onChangecommodities6(e) {
  this.setState({
    form1_commodities6: e.target.value
  });
}
onChangecommodities7(e) {
  this.setState({
    form1_commodities7: e.target.value
  });
}
onChangecommodities8(e) {
  this.setState({
    form1_commodities8: e.target.value
  });
}
onChangecommodities9(e) {
  this.setState({
    form1_commodities9: e.target.value
  });
}
onChangecommodities10(e) {
  this.setState({
    form1_commodities10: e.target.value
  });
}
onChangecommodities11(e) {
  this.setState({
    form1_commodities11: e.target.value
  });
}
onChangecommodities12(e) {
  this.setState({
    form1_commodities12: e.target.value
  });
}
onChangecommodities13(e) {
  this.setState({
    form1_commodities13: e.target.value
  });
}
onChangecommodities14(e) {
  this.setState({
    form1_commodities14: e.target.value
  });
}
onChangecommodities15(e) {
  this.setState({
    form1_commodities15: e.target.value
  });
}
onChangecommodities16(e) {
  this.setState({
    form1_commodities16: e.target.value
  });
}
onChangecommodities17(e) {
  this.setState({
    form1_commodities17: e.target.value
  });
}
onChangecommodities18(e) {
  this.setState({
    form1_commodities18: e.target.value
  });
}
onChangecommodities19(e) {
  this.setState({
    form1_commodities19: e.target.value
  });
}
onChangecommodities20(e) {
  this.setState({
    form1_commodities20: e.target.value
  });
}

onChangecommodities21(e) {
  this.setState({
    form1_commodities21: e.target.value
  });
}
onChangecommodities22(e) {
  this.setState({
    form1_commodities22: e.target.value
  });
}
onChangecommodities23(e) {
  this.setState({
    form1_commodities23: e.target.value
  });
}
onChangecommodities24(e) {
  this.setState({
    form1_commodities24: e.target.value
  });
}
onChangecommodities25(e) {
  this.setState({
    form1_commodities25: e.target.value
  });
}
onChangecommodities26(e) {
  this.setState({
    form1_commodities26: e.target.value
  });
}
onChangecommodities27(e) {
  this.setState({
    form1_commodities27: e.target.value
  });
}
onChangecommodities28(e) {
  this.setState({
    form1_commodities28: e.target.value
  });
}
onChangecommodities29(e) {
  this.setState({
    form1_commodities29: e.target.value
  });
}
onChangecommodities30(e) {
  this.setState({
    form1_commodities30: e.target.value
  });
}
onChangecommodities31(e) {
  this.setState({
    form1_commodities31: e.target.value
  });
}
onChangecommodities32(e) {
  this.setState({
    form1_commodities32: e.target.value
  });
}
onChangecommodities33(e) {
  this.setState({
    form1_commodities33: e.target.value
  });
}
onChangecommodities34(e) {
  this.setState({
    form1_commodities34: e.target.value
  });
}
onChangecommodities35(e) {
  this.setState({
    form1_commodities35: e.target.value
  });
}
onChangecommodities36(e) {
  this.setState({
    form1_commodities36: e.target.value
  });
}
onChangecommodities37(e) {
  this.setState({
    form1_commodities37: e.target.value
  });
}
onChangecommodities38(e) {
  this.setState({
    form1_commodities38: e.target.value
  });
}
onChangecommodities39(e) {
  this.setState({
    form1_commodities39: e.target.value
  });
}
onChangecommodities40(e) {
  this.setState({
    form1_commodities40: e.target.value
  });
}
onChangecommodities41(e) {
  this.setState({
    form1_commodities41: e.target.value
  });
}
onChangecommodities42(e) {
  this.setState({
    form1_commodities42: e.target.value
  });
}
onChangecommodities43(e) {
  this.setState({
    form1_commodities43: e.target.value
  });
}
onChangecommodities44(e) {
  this.setState({
    form1_commodities44: e.target.value
  });
}
onChangecommodities45(e) {
  this.setState({
    form1_commodities45: e.target.value
  });
}
onChangecommodities46(e) {
  this.setState({
    form1_commodities46: e.target.value
  });
}
onChangecommodities47(e) {
  this.setState({
    form1_commodities47: e.target.value
  });
}
onChangecommodities48(e) {
  this.setState({
    form1_commodities48: e.target.value
  });
}
onChangecommodities49(e) {
  this.setState({
    form1_commodities49: e.target.value
  });
}
onChangecommodities50(e) {
  this.setState({
    form1_commodities50: e.target.value
  });
}
onChangecommodities51(e) {
  this.setState({
    form1_commodities51: e.target.value
  });
}
onChangecommodities52(e) {
  this.setState({
    form1_commodities52: e.target.value
  });
}
onChangecommodities53(e) {
  this.setState({
    form1_commodities53: e.target.value
  });
}
onChangecommodities54(e) {
  this.setState({
    form1_commodities54: e.target.value
  });
}
onChangecommodities55(e) {
  this.setState({
    form1_commodities55: e.target.value
  });
}
onChangecommodities56(e) {
  this.setState({
    form1_commodities56: e.target.value
  });
}
onChangecommodities57(e) {
  this.setState({
    form1_commodities57: e.target.value
  });
}
onChangecommodities58(e) {
  this.setState({
    form1_commodities58: e.target.value
  });
}
onChangecommodities59(e) {
  this.setState({
    form1_commodities59: e.target.value
  });
}
onChangecommodities60(e) {
  this.setState({
    form1_commodities60: e.target.value
  });
}
onChangecommodities61(e) {
  this.setState({
    form1_commodities61: e.target.value
  });
}
onChangecommodities62(e) {
  this.setState({
    form1_commodities62: e.target.value
  });
}
onChangecommodities63(e) {
  this.setState({
    form1_commodities63: e.target.value
  });
}
onChangecommodities64(e) {
  this.setState({
    form1_commodities64: e.target.value
  });
}
onChangecommodities65(e) {
  this.setState({
    form1_commodities65: e.target.value
  });
}
onChangecommodities66(e) {
  this.setState({
    form1_commodities66: e.target.value
  });
}
onChangecommodities67(e) {
  this.setState({
    form1_commodities67: e.target.value
  });
}
onChangecommodities68(e) {
  this.setState({
    form1_commodities68: e.target.value
  });
}
onChangecommodities69(e) {
  this.setState({
    form1_commodities69: e.target.value
  });
}
onChangecommodities70(e) {
  this.setState({
    form1_commodities70: e.target.value
  });
}
onChangecommodities71(e) {
  this.setState({
    form1_commodities71: e.target.value
  });
}
onChangecommodities72(e) {
  this.setState({
    form1_commodities72: e.target.value
  });
}
onChangecommodities73(e) {
  this.setState({
    form1_commodities73: e.target.value
  });
}
onChangecommodities74(e) {
  this.setState({
    form1_commodities74: e.target.value
  });
}
onChangecommodities75(e) {
  this.setState({
    form1_commodities75: e.target.value
  });
}
onChangecommodities76(e) {
  this.setState({
    form1_commodities76: e.target.value
  });
}
onChangecommodities77(e) {
  this.setState({
    form1_commodities77: e.target.value
  });
}
onChangecommodities78(e) {
  this.setState({
    form1_commodities78: e.target.value
  });
}
onChangecommodities79(e) {
  this.setState({
    form1_commodities79: e.target.value
  });
}
onChangecommodities80(e) {
  this.setState({
    form1_commodities80: e.target.value
  });
}
onChangecommodities81(e) {
  this.setState({
    form1_commodities81: e.target.value
  });
}
onChangecommodities82(e) {
  this.setState({
    form1_commodities82: e.target.value
  });
}
onChangecommodities83(e) {
  this.setState({
    form1_commodities83: e.target.value
  });
}
onChangecommodities84(e) {
  this.setState({
    form1_commodities84: e.target.value
  });
}
onChangecommodities85(e) {
  this.setState({
    form1_commodities85: e.target.value
  });
}
onChangecommodities86(e) {
  this.setState({
    form1_commodities86: e.target.value
  });
}
onChangecommodities87(e) {
  this.setState({
    form1_commodities87: e.target.value
  });
}
onChangecommodities88(e) {
  this.setState({
    form1_commodities88: e.target.value
  });
}
onChangecommodities89(e) {
  this.setState({
    form1_commodities89: e.target.value
  });
}
onChangecommodities90(e) {
  this.setState({
    form1_commodities90: e.target.value
  });
}
onChangecommodities91(e) {
  this.setState({
    form1_commodities91: e.target.value
  });
}
onChangecommodities92(e) {
  this.setState({
    form1_commodities92: e.target.value
  });
}
onChangecommodities93(e) {
  this.setState({
    form1_commodities93: e.target.value
  });
}
onChangecommodities94(e) {
  this.setState({
    form1_commodities94: e.target.value
  });
}
onChangecommodities95(e) {
  this.setState({
    form1_commodities95: e.target.value
  });
}
onChangecommodities96(e) {
  this.setState({
    form1_commodities96: e.target.value
  });
}
onChangecommodities97(e) {
  this.setState({
    form1_commodities97: e.target.value
  });
}
onChangecommodities98(e) {
  this.setState({
    form1_commodities98: e.target.value
  });
}
onChangecommodities99(e) {
  this.setState({
    form1_commodities99: e.target.value
  });
}
onChangecommodities100(e) {
  this.setState({
    form1_commodities100: e.target.value
  });
}
onChangecommodities101(e) {
  this.setState({
    form1_commodities101: e.target.value
  });
}
onChangecommodities102(e) {
  this.setState({
    form1_commodities102: e.target.value
  });
}
onChangecommodities103(e) {
  this.setState({
    form1_commodities103: e.target.value
  });
}
onChangecommodities104(e) {
  this.setState({
    form1_commodities104: e.target.value
  });
}
onChangecommodities105(e) {
  this.setState({
    form1_commodities105: e.target.value
  });
}
onChangecommodities106(e) {
  this.setState({
    form1_commodities106: e.target.value
  });
}
onChangecommodities107(e) {
  this.setState({
    form1_commodities107: e.target.value
  });
}
onChangecommodities108(e) {
  this.setState({
    form1_commodities108: e.target.value
  });
}
onChangecommodities109(e) {
  this.setState({
    form1_commodities109: e.target.value
  });
}
onChangecommodities110(e) {
  this.setState({
    form1_commodities110: e.target.value
  });
}
onChangecommodities111(e) {
  this.setState({
    form1_commodities111: e.target.value
  });
}
onChangecommodities112(e) {
  this.setState({
    form1_commodities112: e.target.value
  });
}
onChangecommodities113(e) {
  this.setState({
    form1_commodities113: e.target.value
  });
}
onChangecommodities114(e) {
  this.setState({
    form1_commodities114: e.target.value
  });
}
onChangecommodities115(e) {
  this.setState({
    form1_commodities115: e.target.value
  });
}
onChangecommodities116(e) {
  this.setState({
    form1_commodities116: e.target.value
  });
}
onChangecommodities117(e) {
  this.setState({
    form1_commodities117: e.target.value
  });
}
onChangecommodities118(e) {
  this.setState({
    form1_commodities118: e.target.value
  });
}
onChangecommodities119(e) {
  this.setState({
    form1_commodities119: e.target.value
  });
}
onChangecommodities120(e) {
  this.setState({
    form1_commodities120: e.target.value
  });
}

onChangecommodities121(e) {
  this.setState({
    form1_commodities121: e.target.value
  });
}
onChangecommodities122(e) {
  this.setState({
    form1_commodities122: e.target.value
  });
}
onChangecommodities123(e) {
  this.setState({
    form1_commodities123: e.target.value
  });
}
onChangecommodities124(e) {
  this.setState({
    form1_commodities124: e.target.value
  });
}
onChangecommodities125(e) {
  this.setState({
    form1_commodities125: e.target.value
  });
}
onChangecommodities126(e) {
  this.setState({
    form1_commodities126: e.target.value
  });
}
onChangecommodities127(e) {
  this.setState({
    form1_commodities127: e.target.value
  });
}
onChangecommodities128(e) {
  this.setState({
    form1_commodities128: e.target.value
  });
}
onChangecommodities129(e) {
  this.setState({
    form1_commodities129: e.target.value
  });
}
onChangecommodities130(e) {
  this.setState({
    form1_commodities130: e.target.value
  });
}
onChangecommodities131(e) {
  this.setState({
    form1_commodities131: e.target.value
  });
}
onChangecommodities132(e) {
  this.setState({
    form1_commodities132: e.target.value
  });
}
onChangecommodities133(e) {
  this.setState({
    form1_commodities133: e.target.value
  });
}
onChangecommodities134(e) {
  this.setState({
    form1_commodities134: e.target.value
  });
}
onChangecommodities135(e) {
  this.setState({
    form1_commodities135: e.target.value
  });
}
onChangecommodities136(e) {
  this.setState({
    form1_commodities136: e.target.value
  });
}
onChangecommodities137(e) {
  this.setState({
    form1_commodities137: e.target.value
  });
}
onChangecommodities138(e) {
  this.setState({
    form1_commodities138: e.target.value
  });
}
onChangecommodities139(e) {
  this.setState({
    form1_commodities139: e.target.value
  });
}
onChangecommodities140(e) {
  this.setState({
    form1_commodities140: e.target.value
  });
}
onChangecommodities141(e) {
  this.setState({
    form1_commodities141: e.target.value
  });
}
onChangecommodities142(e) {
  this.setState({
    form1_commodities142: e.target.value
  });
}
onChangecommodities143(e) {
  this.setState({
    form1_commodities143: e.target.value
  });
}
onChangecommodities144(e) {
  this.setState({
    form1_commodities144: e.target.value
  });
}
onChangecommodities145(e) {
  this.setState({
    form1_commodities145: e.target.value
  });
}
onChangecommodities146(e) {
  this.setState({
    form1_commodities146: e.target.value
  });
}
onChangecommodities147(e) {
  this.setState({
    form1_commodities147: e.target.value
  });
}
onChangecommodities148(e) {
  this.setState({
    form1_commodities148: e.target.value
  });
}
onChangecommodities149(e) {
  this.setState({
    form1_commodities149: e.target.value
  });
}
onChangecommodities150(e) {
  this.setState({
    form1_commodities150: e.target.value
  });
}
onChangecommodities151(e) {
  this.setState({
    form1_commodities151: e.target.value
  });
}
onChangecommodities152(e) {
  this.setState({
    form1_commodities152: e.target.value
  });
}
onChangecommodities153(e) {
  this.setState({
    form1_commodities153: e.target.value
  });
}
onChangecommodities154(e) {
  this.setState({
    form1_commodities154: e.target.value
  });
}
onChangecommodities155(e) {
  this.setState({
    form1_commodities155: e.target.value
  });
}
onChangecommodities156(e) {
  this.setState({
    form1_commodities156: e.target.value
  });
}
onChangecommodities157(e) {
  this.setState({
    form1_commodities157: e.target.value
  });
}
onChangecommodities158(e) {
  this.setState({
    form1_commodities158: e.target.value
  });
}
onChangecommodities159(e) {
  this.setState({
    form1_commodities159: e.target.value
  });
}
onChangecommodities160(e) {
  this.setState({
    form1_commodities160: e.target.value
  });
}
onChangecommodities161(e) {
  this.setState({
    form1_commodities161: e.target.value
  });
}
onChangecommodities162(e) {
  this.setState({
    form1_commodities162: e.target.value
  });
}
onChangecommodities163(e) {
  this.setState({
    form1_commodities163: e.target.value
  });
}
onChangecommodities164(e) {
  this.setState({
    form1_commodities164: e.target.value
  });
}
onChangecommodities165(e) {
  this.setState({
    form1_commodities165: e.target.value
  });
}
onChangecommodities166(e) {
  this.setState({
    form1_commodities166: e.target.value
  });
}
onChangecommodities167(e) {
  this.setState({
    form1_commodities167: e.target.value
  });
}
onChangecommodities168(e) {
  this.setState({
    form1_commodities168: e.target.value
  });
}
onChangecommodities169(e) {
  this.setState({
    form1_commodities169: e.target.value
  });
}
onChangecommodities170(e) {
  this.setState({
    form1_commodities170: e.target.value
  });
}
onChangecommodities171(e) {
  this.setState({
    form1_commodities171: e.target.value
  });
}
onChangecommodities172(e) {
  this.setState({
    form1_commodities172: e.target.value
  });
}
onChangecommodities173(e) {
  this.setState({
    form1_commodities173: e.target.value
  });
}
onChangecommodities174(e) {
  this.setState({
    form1_commodities174: e.target.value
  });
}
onChangecommodities175(e) {
  this.setState({
    form1_commodities175: e.target.value
  });
}
onChangecommodities176(e) {
  this.setState({
    form1_commodities176: e.target.value
  });
}
onChangecommodities177(e) {
  this.setState({
    form1_commodities177: e.target.value
  });
}
onChangecommodities178(e) {
  this.setState({
    form1_commodities178: e.target.value
  });
}
onChangecommodities179(e) {
  this.setState({
    form1_commodities179: e.target.value
  });
}
onChangecommodities180(e) {
  this.setState({
    form1_commodities180: e.target.value
  });
}
onChangecommodities181(e) {
  this.setState({
    form1_commodities181: e.target.value
  });
}
onChangecommodities182(e) {
  this.setState({
    form1_commodities182: e.target.value
  });
}
onChangecommodities183(e) {
  this.setState({
    form1_commodities183: e.target.value
  });
}
onChangecommodities184(e) {
  this.setState({
    form1_commodities184: e.target.value
  });
}
onChangecommodities185(e) {
  this.setState({
    form1_commodities185: e.target.value
  });
}
onChangecommodities186(e) {
  this.setState({
    form1_commodities186: e.target.value
  });
}
onChangecommodities187(e) {
  this.setState({
    form1_commodities187: e.target.value
  });
}
onChangecommodities188(e) {
  this.setState({
    form1_commodities188: e.target.value
  });
}
onChangecommodities189(e) {
  this.setState({
    form1_commodities189: e.target.value
  });
}
onChangecommodities190(e) {
  this.setState({
    form1_commodities190: e.target.value
  });
}
onChangecommodities191(e) {
  this.setState({
    form1_commodities191: e.target.value
  });
}
onChangecommodities192(e) {
  this.setState({
    form1_commodities192: e.target.value
  });
}
onChangecommodities193(e) {
  this.setState({
    form1_commodities193: e.target.value
  });
}
onChangecommodities194(e) {
  this.setState({
    form1_commodities194: e.target.value
  });
}
onChangecommodities195(e) {
  this.setState({
    form1_commodities195: e.target.value
  });
}
onChangecommodities196(e) {
  this.setState({
    form1_commodities196: e.target.value
  });
}
onChangecommodities197(e) {
  this.setState({
    form1_commodities197: e.target.value
  });
}
onChangecommodities198(e) {
  this.setState({
    form1_commodities198: e.target.value
  });
}
onChangecommodities199(e) {
  this.setState({
    form1_commodities199: e.target.value
  });
}
onChangecommodities200(e) {
  this.setState({
    form1_commodities200: e.target.value
  });
}
onChangecommodities201(e) {
  this.setState({
    form1_commodities201: e.target.value
  });
}
onChangecommodities202(e) {
  this.setState({
    form1_commodities202: e.target.value
  });
}
onChangecommodities203(e) {
  this.setState({
    form1_commodities203: e.target.value
  });
}
onChangecommodities204(e) {
  this.setState({
    form1_commodities204: e.target.value
  });
}
onChangecommodities205(e) {
  this.setState({
    form1_commodities205: e.target.value
  });
}
onChangecommodities206(e) {
  this.setState({
    form1_commodities206: e.target.value
  });
}
onChangecommodities207(e) {
  this.setState({
    form1_commodities207: e.target.value
  });
}
onChangecommodities208(e) {
  this.setState({
    form1_commodities208: e.target.value
  });
}
onChangecommodities209(e) {
  this.setState({
    form1_commodities209: e.target.value
  });
}
onChangecommodities210(e) {
  this.setState({
    form1_commodities210: e.target.value
  });
}
onChangecommodities211(e) {
  this.setState({
    form1_commodities211: e.target.value
  });
}
onChangecommodities212(e) {
  this.setState({
    form1_commodities212: e.target.value
  });
}
onChangecommodities213(e) {
  this.setState({
    form1_commodities213: e.target.value
  });
}
onChangecommodities214(e) {
  this.setState({
    form1_commodities214: e.target.value
  });
}
onChangecommodities215(e) {
  this.setState({
    form1_commodities215: e.target.value
  });
}
onChangecommodities216(e) {
  this.setState({
    form1_commodities216: e.target.value
  });
}
onChangecommodities217(e) {
  this.setState({
    form1_commodities217: e.target.value
  });
}
onChangecommodities218(e) {
  this.setState({
    form1_commodities218: e.target.value
  });
}
onChangecommodities219(e) {
  this.setState({
    form1_commodities219: e.target.value
  });
}
onChangecommodities220(e) {
  this.setState({
    form1_commodities220: e.target.value
  });
}

onChangecommodities221(e) {
  this.setState({
    form1_commodities221: e.target.value
  });
}
onChangecommodities222(e) {
  this.setState({
    form1_commodities222: e.target.value
  });
}
onChangecommodities223(e) {
  this.setState({
    form1_commodities223: e.target.value
  });
}
onChangecommodities224(e) {
  this.setState({
    form1_commodities224: e.target.value
  });
}
onChangecommodities225(e) {
  this.setState({
    form1_commodities225: e.target.value
  });
}
onChangecommodities226(e) {
  this.setState({
    form1_commodities226: e.target.value
  });
}
onChangecommodities227(e) {
  this.setState({
    form1_commodities227: e.target.value
  });
}
onChangecommodities228(e) {
  this.setState({
    form1_commodities228: e.target.value
  });
}
onChangecommodities229(e) {
  this.setState({
    form1_commodities229: e.target.value
  });
}
onChangecommodities230(e) {
  this.setState({
    form1_commodities230: e.target.value
  });
}
onChangecommodities231(e) {
  this.setState({
    form1_commodities231: e.target.value
  });
}
onChangecommodities232(e) {
  this.setState({
    form1_commodities232: e.target.value
  });
}
onChangecommodities233(e) {
  this.setState({
    form1_commodities233: e.target.value
  });
}
onChangecommodities234(e) {
  this.setState({
    form1_commodities234: e.target.value
  });
}
onChangecommodities235(e) {
  this.setState({
    form1_commodities235: e.target.value
  });
}
onChangecommodities236(e) {
  this.setState({
    form1_commodities236: e.target.value
  });
}
onChangecommodities237(e) {
  this.setState({
    form1_commodities237: e.target.value
  });
}
onChangecommodities238(e) {
  this.setState({
    form1_commodities238: e.target.value
  });
}
onChangecommodities239(e) {
  this.setState({
    form1_commodities239: e.target.value
  });
}
onChangecommodities240(e) {
  this.setState({
    form1_commodities240: e.target.value
  });
}
onChangecommodities241(e) {
  this.setState({
    form1_commodities241: e.target.value
  });
}
onChangecommodities242(e) {
  this.setState({
    form1_commodities242: e.target.value
  });
}
onChangecommodities243(e) {
  this.setState({
    form1_commodities243: e.target.value
  });
}
onChangecommodities244(e) {
  this.setState({
    form1_commodities244: e.target.value
  });
}
onChangecommodities245(e) {
  this.setState({
    form1_commodities245: e.target.value
  });
}
onChangecommodities246(e) {
  this.setState({
    form1_commodities246: e.target.value
  });
}
onChangecommodities247(e) {
  this.setState({
    form1_commodities247: e.target.value
  });
}
onChangecommodities248(e) {
  this.setState({
    form1_commodities248: e.target.value
  });
}
onChangecommodities249(e) {
  this.setState({
    form1_commodities249: e.target.value
  });
}
onChangecommodities250(e) {
  this.setState({
    form1_commodities250: e.target.value
  });
}
onChangecommodities251(e) {
  this.setState({
    form1_commodities251: e.target.value
  });
}
onChangecommodities252(e) {
  this.setState({
    form1_commodities252: e.target.value
  });
}
onChangecommodities253(e) {
  this.setState({
    form1_commodities253: e.target.value
  });
}
onChangecommodities254(e) {
  this.setState({
    form1_commodities254: e.target.value
  });
}
onChangecommodities255(e) {
  this.setState({
    form1_commodities255: e.target.value
  });
}
onChangecommodities256(e) {
  this.setState({
    form1_commodities256: e.target.value
  });
}
onChangecommodities257(e) {
  this.setState({
    form1_commodities257: e.target.value
  });
}
onChangecommodities258(e) {
  this.setState({
    form1_commodities258: e.target.value
  });
}
onChangecommodities259(e) {
  this.setState({
    form1_commodities259: e.target.value
  });
}
onChangecommodities260(e) {
  this.setState({
    form1_commodities260: e.target.value
  });
}
onChangecommodities261(e) {
  this.setState({
    form1_commodities261: e.target.value
  });
}
onChangecommodities262(e) {
  this.setState({
    form1_commodities262: e.target.value
  });
}
onChangecommodities263(e) {
  this.setState({
    form1_commodities263: e.target.value
  });
}
onChangecommodities264(e) {
  this.setState({
    form1_commodities264: e.target.value
  });
}
onChangecommodities265(e) {
  this.setState({
    form1_commodities265: e.target.value
  });
}
onChangecommodities266(e) {
  this.setState({
    form1_commodities266: e.target.value
  });
}
onChangecommodities267(e) {
  this.setState({
    form1_commodities267: e.target.value
  });
}
onChangecommodities268(e) {
  this.setState({
    form1_commodities268: e.target.value
  });
}
onChangecommodities269(e) {
  this.setState({
    form1_commodities269: e.target.value
  });
}
onChangecommodities270(e) {
  this.setState({
    form1_commodities270: e.target.value
  });
}
onChangecommodities271(e) {
  this.setState({
    form1_commodities271: e.target.value
  });
}
onChangecommodities272(e) {
  this.setState({
    form1_commodities272: e.target.value
  });
}
onChangecommodities273(e) {
  this.setState({
    form1_commodities273: e.target.value
  });
}
onChangecommodities274(e) {
  this.setState({
    form1_commodities274: e.target.value
  });
}
onChangecommodities275(e) {
  this.setState({
    form1_commodities275: e.target.value
  });
}
onChangecommodities276(e) {
  this.setState({
    form1_commodities276: e.target.value
  });
}
onChangecommodities277(e) {
  this.setState({
    form1_commodities277: e.target.value
  });
}
onChangecommodities278(e) {
  this.setState({
    form1_commodities278: e.target.value
  });
}
onChangecommodities279(e) {
  this.setState({
    form1_commodities279: e.target.value
  });
}
onChangecommodities280(e) {
  this.setState({
    form1_commodities280: e.target.value
  });
}
onChangecommodities281(e) {
  this.setState({
    form1_commodities281: e.target.value
  });
}
onChangecommodities282(e) {
  this.setState({
    form1_commodities282: e.target.value
  });
}
onChangecommodities283(e) {
  this.setState({
    form1_commodities283: e.target.value
  });
}
onChangecommodities284(e) {
  this.setState({
    form1_commodities284: e.target.value
  });
}
onChangecommodities285(e) {
  this.setState({
    form1_commodities285: e.target.value
  });
}
onChangecommodities286(e) {
  this.setState({
    form1_commodities286: e.target.value
  });
}
onChangecommodities287(e) {
  this.setState({
    form1_commodities287: e.target.value
  });
}
onChangecommodities288(e) {
  this.setState({
    form1_commodities288: e.target.value
  });
}
onChangecommodities289(e) {
  this.setState({
    form1_commodities289: e.target.value
  });
}
onChangecommodities290(e) {
  this.setState({
    form1_commodities290: e.target.value
  });
}
onChangecommodities291(e) {
  this.setState({
    form1_commodities291: e.target.value
  });
}
onChangecommodities292(e) {
  this.setState({
    form1_commodities292: e.target.value
  });
}
onChangecommodities293(e) {
  this.setState({
    form1_commodities293: e.target.value
  });
}
onChangecommodities294(e) {
  this.setState({
    form1_commodities294: e.target.value
  });
}
// onChangecommodities295(e) {
//   this.setState({
//     form1_commodities295: e.target.value
//   });
// }
// onChangecommodities296(e) {
//   this.setState({
//     form1_commodities296: e.target.value
//   });
// }
// onChangecommodities297(e) {
//   this.setState({
//     form1_commodities297: e.target.value
//   });
// }
// onChangecommodities298(e) {
//   this.setState({
//     form1_commodities298: e.target.value
//   });
// }
// onChangecommodities299(e) {
//   this.setState({
//     form1_commodities299: e.target.value
//   });
// }
// onChangecommodities300(e) {
//   this.setState({
//     form1_commodities300: e.target.value
//   });
// }
// onChangecommodities301(e) {
//   this.setState({
//     form1_commodities301: e.target.value
//   });
// }
// onChangecommodities302(e) {
//   this.setState({
//     form1_commodities302: e.target.value
//   });
// }
// onChangecommodities303(e) {
//   this.setState({
//     form1_commodities303: e.target.value
//   });
// }
// onChangecommodities304(e) {
//   this.setState({
//     form1_commodities304: e.target.value
//   });
// }
// onChangecommodities305(e) {
//   this.setState({
//     form1_commodities305: e.target.value
//   });
// }
// onChangecommodities306(e) {
//   this.setState({
//     form1_commodities306: e.target.value
//   });
// }
// onChangecommodities307(e) {
//   this.setState({
//     form1_commodities307: e.target.value
//   });
// }
// onChangecommodities308(e) {
//   this.setState({
//     form1_commodities308: e.target.value
//   });
// }
// onChangecommodities309(e) {
//   this.setState({
//     form1_commodities309: e.target.value
//   });
// }
// onChangecommodities310(e) {
//   this.setState({
//     form1_commodities310: e.target.value
//   });
// }
// onChangecommodities311(e) {
//   this.setState({
//     form1_commodities311: e.target.value
//   });
// }
// onChangecommodities312(e) {
//   this.setState({
//     form1_commodities312: e.target.value
//   });
// }
// onChangecommodities313(e) {
//   this.setState({
//     form1_commodities313: e.target.value
//   });
// }
// onChangecommodities314(e) {
//   this.setState({
//     form1_commodities314: e.target.value
//   });
// }
// onChangecommodities315(e) {
//   this.setState({
//     form1_commodities315: e.target.value
//   });
// }
// onChangecommodities16(e) {
//   this.setState({
//     form1_commodities316: e.target.value
//   });
// }
// onChangecommodities317(e) {
//   this.setState({
//     form1_commodities317: e.target.value
//   });
// }
// onChangecommodities318(e) {
//   this.setState({
//     form1_commodities318: e.target.value
//   });
// }
// onChangecommodities319(e) {
//   this.setState({
//     form1_commodities319: e.target.value
//   });
// }
// onChangecommodities320(e) {
//   this.setState({
//     form1_commodities320: e.target.value
//   });
// }

// onChangecommodities321(e) {
//   this.setState({
//     form1_commodities321: e.target.value
//   });
// }
// onChangecommodities322(e) {
//   this.setState({
//     form1_commodities322: e.target.value
//   });
// }
// onChangecommodities323(e) {
//   this.setState({
//     form1_commodities323: e.target.value
//   });
// }
// onChangecommodities324(e) {
//   this.setState({
//     form1_commodities324: e.target.value
//   });
// }
// onChangecommodities325(e) {
//   this.setState({
//     form1_commodities325: e.target.value
//   });
// }
// onChangecommodities326(e) {
//   this.setState({
//     form1_commodities326: e.target.value
//   });
// }
// onChangecommodities327(e) {
//   this.setState({
//     form1_commodities327: e.target.value
//   });
// }
// onChangecommodities328(e) {
//   this.setState({
//     form1_commodities328: e.target.value
//   });
// }
// onChangecommodities329(e) {
//   this.setState({
//     form1_commodities329: e.target.value
//   });
// }
// onChangecommodities330(e) {
//   this.setState({
//     form1_commodities330: e.target.value
//   });
// }
// onChangecommodities331(e) {
//   this.setState({
//     form1_commodities331: e.target.value
//   });
// }
// onChangecommodities332(e) {
//   this.setState({
//     form1_commodities332: e.target.value
//   });
// }
// onChangecommodities333(e) {
//   this.setState({
//     form1_commodities333: e.target.value
//   });
// }
// onChangecommodities334(e) {
//   this.setState({
//     form1_commodities334: e.target.value
//   });
// }
// onChangecommodities335(e) {
//   this.setState({
//     form1_commodities335: e.target.value
//   });
// }
// onChangecommodities336(e) {
//   this.setState({
//     form1_commodities336: e.target.value
//   });
// }
// onChangecommodities337(e) {
//   this.setState({
//     form1_commodities337: e.target.value
//   });
// }
// onChangecommodities338(e) {
//   this.setState({
//     form1_commodities338: e.target.value
//   });
// }
// onChangecommodities339(e) {
//   this.setState({
//     form1_commodities339: e.target.value
//   });
// }
// onChangecommodities340(e) {
//   this.setState({
//     form1_commodities340: e.target.value
//   });
// }
// onChangecommodities341(e) {
//   this.setState({
//     form1_commodities341: e.target.value
//   });
// }
// onChangecommodities342(e) {
//   this.setState({
//     form1_commodities342: e.target.value
//   });
// }
// onChangecommodities343(e) {
//   this.setState({
//     form1_commodities343: e.target.value
//   });
// }
// onChangecommodities344(e) {
//   this.setState({
//     form1_commodities344: e.target.value
//   });
// }
// onChangecommodities345(e) {
//   this.setState({
//     form1_commodities345: e.target.value
//   });
// }


onChangename(e) {
this.setState({
  form1_name: e.target.value
});
}
onChangephoneno(e) {
this.setState({
  form1_phoneno: e.target.value
});
}

    onChangeform2name(e) {
      this.setState({
        form2_name: e.target.value
      });
      e.preventDefault();
    }

    onChangeform2phoneno(e) {
      this.setState({
        form2_phoneno: e.target.value
      });
    }

    onChangeform2organisation(e) {
      this.setState({
        form2_organisation: e.target.value
      });
    }
    onChangeform2city(e) {
      this.setState({
        form2_city: e.target.value
      });
    }
    onChangeform2state(e) {
      this.setState({
        form2_state: e.target.value
      });
    }
    onChangeform3name(e) {
      this.setState({
        form3_name: e.target.value
      });
      e.preventDefault();
    }

    onChangeform3phoneno(e) {
      this.setState({
        form3_phoneno: e.target.value
      });
    }

    onChangeform3buyoptions1(e) {
      this.setState({
        form3_buyoptions1: e.target.value
      });
    }
    onChangeform3buyoptions2(e) {
      this.setState({
        form3_buyoptions2: e.target.value
      });
    }
    onChangeform3buyoptions3(e) {
      this.setState({
        form3_buyoptions3: e.target.value
      });
    }
    onChangeform3buyoptions4(e) {
      this.setState({
        form3_buyoptions4: e.target.value
      });
    }
    onChangeform3buyoptions5(e) {
      this.setState({
        form3_buyoptions5: e.target.value
      });
    }
    onChangeform3buyoptions6(e) {
      this.setState({
        form3_buyoptions6: e.target.value
      });
    }
    onChangeform3buyoptions7(e) {
      this.setState({
        form3_buyoptions7: e.target.value
      });
    }
    onChangeform3buyoptions8(e) {
      this.setState({
        form3_buyoptions8: e.target.value
      });
    }
    onChangeform3buyoptions9(e) {
      this.setState({
        form3_buyoptions9: e.target.value
      });
    }
    onChangeform3buyoptions10(e) {
      this.setState({
        form3_buyoptions10: e.target.value
      });
    }
    onChangeform3buyoptions11(e) {
      this.setState({
        form3_buyoptions11: e.target.value
      });
    }
    onChangeform3buyoptions12(e) {
      this.setState({
        form3_buyoptions12: e.target.value
      });
    }
    onChangeform3buyoptions13(e) {
      this.setState({
        form3_buyoptions13: e.target.value
      });
    }
    onChangeform3buyoptions14(e) {
      this.setState({
        form3_buyoptions14: e.target.value
      });
    }
    onChangeform3buyoptions15(e) {
      this.setState({
        form3_buyoptions15: e.target.value
      });
    }
    onChangeform3buyoptions16(e) {
      this.setState({
        form3_buyoptions16: e.target.value
      });
    }
    onChangeform3buyoptions17(e) {
      this.setState({
        form3_buyoptions17: e.target.value
      });
    }
    onChangeform3buyoptions18(e) {
      this.setState({
        form3_buyoptions18: e.target.value
      });
    }
    onChangeform3buyoptions19(e) {
      this.setState({
        form3_buyoptions19: e.target.value
      });
    }
    onChangeform3buyoptions20(e) {
      this.setState({
        form3_buyoptions20: e.target.value
      });
    }
    onChangeform3buyoptions21(e) {
      this.setState({
        form3_buyoptions21: e.target.value
      });
    }
    onChangeform3buyoptions22(e) {
      this.setState({
        form3_buyoptions22: e.target.value
      });
    }
    onChangeform3buyoptions23(e) {
      this.setState({
        form3_buyoptions23: e.target.value
      });
    }
    onChangeform3buyoptions24(e) {
      this.setState({
        form3_buyoptions24: e.target.value
      });
    }
    onChangeform3buyoptions25(e) {
      this.setState({
        form3_buyoptions25: e.target.value
      });
    }
    onChangeform3buyoptions26(e) {
      this.setState({
        form3_buyoptions26: e.target.value
      });
    }
    onChangeform3buyoptions27(e) {
      this.setState({
        form3_buyoptions27: e.target.value
      });
    }
    onChangeform3buyoptions28(e) {
      this.setState({
        form3_buyoptions28: e.target.value
      });
    }
    onChangeform3buyoptions29(e) {
      this.setState({
        form3_buyoptions29: e.target.value
      });
    }
    onChangeform3buyoptions30(e) {
      this.setState({
        form3_buyoptions30: e.target.value
      });
    }
    onChangeform3buyoptions31(e) {
      this.setState({
        form3_buyoptions31: e.target.value
      });
    }
    onChangeform3buyoptions32(e) {
      this.setState({
        form3_buyoptions32: e.target.value
      });
    }
    onChangeform3buyoptions33(e) {
      this.setState({
        form3_buyoptions33: e.target.value
      });
    }
    onChangeform3buyoptions34(e) {
      this.setState({
        form3_buyoptions34: e.target.value
      });
    }
    onChangeform3buyoptions35(e) {
      this.setState({
        form3_buyoptions35: e.target.value
      });
    }
    onChangeform3buyoptions36(e) {
      this.setState({
        form3_buyoptions36: e.target.value
      });
    }
    onChangeform3buyoptions37(e) {
      this.setState({
        form3_buyoptions37: e.target.value
      });
    }
    onChangeform3buyoptions38(e) {
      this.setState({
        form3_buyoptions38: e.target.value
      });
    }
    onChangeform3buyoptions39(e) {
      this.setState({
        form3_buyoptions39: e.target.value
      });
    }
    onChangeform3buyoptions40(e) {
      this.setState({
        form3_buyoptions40: e.target.value
      });
    }
    onChangeform3buyoptions41(e) {
      this.setState({
        form3_buyoptions41: e.target.value
      });
    }
    onChangeform3buyoptions42(e) {
      this.setState({
        form3_buyoptions42: e.target.value
      });
    }
    onChangeform3buyoptions43(e) {
      this.setState({
        form3_buyoptions43: e.target.value
      });
    }
    onChangeform3buyoptions44(e) {
      this.setState({
        form3_buyoptions44: e.target.value
      });
    }
    onChangeform3buyoptions45(e) {
      this.setState({
        form3_buyoptions45: e.target.value
      });
    }
    onChangeform3buyoptions46(e) {
      this.setState({
        form3_buyoptions46: e.target.value
      });
    }
    onChangeform3buyoptions47(e) {
      this.setState({
        form3_buyoptions47: e.target.value
      });
    }
    onChangeform3buyoptions48(e) {
      this.setState({
        form3_buyoptions48: e.target.value
      });
    }
    onChangeform3buyoptions49(e) {
      this.setState({
        form3_buyoptions49: e.target.value
      });
    }
    onChangeform3buyoptions50(e) {
      this.setState({
        form3_buyoptions50: e.target.value
      });
    }
    onChangeform3buyoptions51(e) {
      this.setState({
        form3_buyoptions51: e.target.value
      });
    }
    onChangeform3buyoptions52(e) {
      this.setState({
        form3_buyoptions52: e.target.value
      });
    }
    onChangeform3buyoptions53(e) {
      this.setState({
        form3_buyoptions53: e.target.value
      });
    }
    onChangeform3buyoptions54(e) {
      this.setState({
        form3_buyoptions54: e.target.value
      });
    }
    onChangeform3buyoptions55(e) {
      this.setState({
        form3_buyoptions55: e.target.value
      });
    }
    onChangeform3buyoptions56(e) {
      this.setState({
        form3_buyoptions56: e.target.value
      });
    }
    onChangeform3buyoptions57(e) {
      this.setState({
        form3_buyoptions57: e.target.value
      });
    }
    onChangeform3buyoptions58(e) {
      this.setState({
        form3_buyoptions58: e.target.value
      });
    }
    onChangeform3buyoptions59(e) {
      this.setState({
        form3_buyoptions59: e.target.value
      });
    }
    onChangeform3buyoptions60(e) {
      this.setState({
        form3_buyoptions60: e.target.value
      });
    }
    onChangeform3buyoptions61(e) {
      this.setState({
        form3_buyoptions61: e.target.value
      });
    }
    onChangeform3buyoptions62(e) {
      this.setState({
        form3_buyoptions62: e.target.value
      });
    }
    onChangeform3buyoptions63(e) {
      this.setState({
        form3_buyoptions63: e.target.value
      });
    }
    onChangeform3buyoptions64(e) {
      this.setState({
        form3_buyoptions64: e.target.value
      });
    }
    onChangeform3buyoptions65(e) {
      this.setState({
        form3_buyoptions65: e.target.value
      });
    }
    onChangeform3buyoptions66(e) {
      this.setState({
        form3_buyoptions66: e.target.value
      });
    }
    onChangeform3buyoptions67(e) {
      this.setState({
        form3_buyoptions67: e.target.value
      });
    }
    onChangeform3buyoptions68(e) {
      this.setState({
        form3_buyoptions68: e.target.value
      });
    }
    onChangeform3buyoptions69(e) {
      this.setState({
        form3_buyoptions69: e.target.value
      });
    }
    onChangeform3buyoptions70(e) {
      this.setState({
        form3_buyoptions70: e.target.value
      });
    }
    onChangeform3buyoptions71(e) {
      this.setState({
        form3_buyoptions71: e.target.value
      });
    }
    onChangeform3buyoptions72(e) {
      this.setState({
        form3_buyoptions72: e.target.value
      });
    }
    onChangeform3buyoptions73(e) {
      this.setState({
        form3_buyoptions73: e.target.value
      });
    }
    onChangeform3buyoptions74(e) {
      this.setState({
        form3_buyoptions74: e.target.value
      });
    }
    onChangeform3buyoptions75(e) {
      this.setState({
        form3_buyoptions75: e.target.value
      });
    }
    onChangeform3buyoptions76(e) {
      this.setState({
        form3_buyoptions76: e.target.value
      });
    }
    onChangeform3buyoptions77(e) {
      this.setState({
        form3_buyoptions77: e.target.value
      });
    }
    onChangeform3buyoptions78(e) {
      this.setState({
        form3_buyoptions78: e.target.value
      });
    }
    onChangeform3buyoptions79(e) {
      this.setState({
        form3_buyoptions79: e.target.value
      });
    }
    onChangeform3buyoptions80(e) {
      this.setState({
        form3_buyoptions80: e.target.value
      });
    }
    onChangeform3buyoptions81(e) {
      this.setState({
        form3_buyoptions81: e.target.value
      });
    }
    onChangeform3buyoptions82(e) {
      this.setState({
        form3_buyoptions82: e.target.value
      });
    }
    onChangeform3buyoptions83(e) {
      this.setState({
        form3_buyoptions83: e.target.value
      });
    }
    onChangeform3buyoptions84(e) {
      this.setState({
        form3_buyoptions84: e.target.value
      });
    }
    onChangeform3buyoptions85(e) {
      this.setState({
        form3_buyoptions85: e.target.value
      });
    }
    onChangeform3buyoptions86(e) {
      this.setState({
        form3_buyoptions86: e.target.value
      });
    }
    onChangeform3buyoptions87(e) {
      this.setState({
        form3_buyoptions87: e.target.value
      });
    }
    onChangeform3buyoptions88(e) {
      this.setState({
        form3_buyoptions88: e.target.value
      });
    }
    onChangeform3buyoptions89(e) {
      this.setState({
        form3_buyoptions89: e.target.value
      });
    }
    onChangeform3buyoptions90(e) {
      this.setState({
        form3_buyoptions90: e.target.value
      });
    }
    onChangeform3buyoptions91(e) {
      this.setState({
        form3_buyoptions91: e.target.value
      });
    }
    onChangeform3buyoptions92(e) {
      this.setState({
        form3_buyoptions92: e.target.value
      });
    }
    onChangeform3buyoptions93(e) {
      this.setState({
        form3_buyoptions93: e.target.value
      });
    }
    onChangeform3buyoptions94(e) {
      this.setState({
        form3_buyoptions94: e.target.value
      });
    }
    onChangeform3buyoptions95(e) {
      this.setState({
        form3_buyoptions95: e.target.value
      });
    }
    onChangeform3buyoptions96(e) {
      this.setState({
        form3_buyoptions96: e.target.value
      });
    }
    onChangeform3buyoptions97(e) {
      this.setState({
        form3_buyoptions97: e.target.value
      });
    }
    onChangeform3buyoptions98(e) {
      this.setState({
        form3_buyoptions98: e.target.value
      });
    }
    onChangeform3buyoptions99(e) {
      this.setState({
        form3_buyoptions99: e.target.value
      });
    }
    onChangeform3buyoptions100(e) {
      this.setState({
        form3_buyoptions100: e.target.value
      });
    }
    onChangeform3buyoptions101(e) {
      this.setState({
        form3_buyoptions101: e.target.value
      });
    }
    onChangeform3buyoptions102(e) {
      this.setState({
        form3_buyoptions102: e.target.value
      });
    }
    onChangeform3buyoptions103(e) {
      this.setState({
        form3_buyoptions103: e.target.value
      });
    }
    onChangeform3buyoptions104(e) {
      this.setState({
        form3_buyoptions104: e.target.value
      });
    }
    onChangeform3buyoptions105(e) {
      this.setState({
        form3_buyoptions105: e.target.value
      });
    }
    onChangeform3buyoptions106(e) {
      this.setState({
        form3_buyoptions106: e.target.value
      });
    }
    onChangeform3buyoptions107(e) {
      this.setState({
        form3_buyoptions107: e.target.value
      });
    }
    onChangeform3buyoptions108(e) {
      this.setState({
        form3_buyoptions108: e.target.value
      });
    }
    onChangeform3buyoptions109(e) {
      this.setState({
        form3_buyoptions109: e.target.value
      });
    }
    onChangeform3buyoptions110(e) {
      this.setState({
        form3_buyoptions110: e.target.value
      });
    }
    onChangeform3buyoptions111(e) {
      this.setState({
        form3_buyoptions111: e.target.value
      });
    }
    onChangeform3buyoptions112(e) {
      this.setState({
        form3_buyoptions112: e.target.value
      });
    }
    onChangeform3buyoptions113(e) {
      this.setState({
        form3_buyoptions113: e.target.value
      });
    }
    onChangeform3buyoptions114(e) {
      this.setState({
        form3_buyoptions114: e.target.value
      });
    }
    onChangeform3buyoptions115(e) {
      this.setState({
        form3_buyoptions115: e.target.value
      });
    }
    onChangeform3buyoptions116(e) {
      this.setState({
        form3_buyoptions116: e.target.value
      });
    }
    onChangeform3buyoptions117(e) {
      this.setState({
        form3_buyoptions117: e.target.value
      });
    }
    onChangeform3buyoptions118(e) {
      this.setState({
        form3_buyoptions118: e.target.value
      });
    }
    onChangeform3buyoptions119(e) {
      this.setState({
        form3_buyoptions119: e.target.value
      });
    }
    onChangeform3buyoptions120(e) {
      this.setState({
        form3_buyoptions120: e.target.value
      });
    }
    onChangeform3buyoptions121(e) {
      this.setState({
        form3_buyoptions121: e.target.value
      });
    }
    onChangeform3buyoptions122(e) {
      this.setState({
        form3_buyoptions122: e.target.value
      });
    }
    onChangeform3buyoptions123(e) {
      this.setState({
        form3_buyoptions123: e.target.value
      });
    }
    onChangeform3buyoptions124(e) {
      this.setState({
        form3_buyoptions124: e.target.value
      });
    }
    onChangeform3buyoptions125(e) {
      this.setState({
        form3_buyoptions125: e.target.value
      });
    }
    onChangeform3buyoptions126(e) {
      this.setState({
        form3_buyoptions126: e.target.value
      });
    }
    onChangeform3buyoptions127(e) {
      this.setState({
        form3_buyoptions127: e.target.value
      });
    }
    onChangeform3buyoptions128(e) {
      this.setState({
        form3_buyoptions128: e.target.value
      });
    }
    onChangeform3buyoptions129(e) {
      this.setState({
        form3_buyoptions129: e.target.value
      });
    }
    onChangeform3buyoptions130(e) {
      this.setState({
        form3_buyoptions130: e.target.value
      });
    }
    onChangeform3buyoptions131(e) {
      this.setState({
        form3_buyoptions131: e.target.value
      });
    }
    onChangeform3buyoptions132(e) {
      this.setState({
        form3_buyoptions132: e.target.value
      });
    }
    onChangeform3buyoptions133(e) {
      this.setState({
        form3_buyoptions133: e.target.value
      });
    }
    onChangeform3buyoptions134(e) {
      this.setState({
        form3_buyoptions134: e.target.value
      });
    }
    onChangeform3buyoptions135(e) {
      this.setState({
        form3_buyoptions135: e.target.value
      });
    }
    onChangeform3buyoptions136(e) {
      this.setState({
        form3_buyoptions136: e.target.value
      });
    }
    onChangeform3buyoptions137(e) {
      this.setState({
        form3_buyoptions137: e.target.value
      });
    }
    onChangeform3buyoptions138(e) {
      this.setState({
        form3_buyoptions138: e.target.value
      });
    }
    onChangeform3buyoptions139(e) {
      this.setState({
        form3_buyoptions139: e.target.value
      });
    }
    onChangeform3buyoptions140(e) {
      this.setState({
        form3_buyoptions140: e.target.value
      });
    }
    onChangeform3buyoptions141(e) {
      this.setState({
        form3_buyoptions141: e.target.value
      });
    }
    onChangeform3buyoptions142(e) {
      this.setState({
        form3_buyoptions142: e.target.value
      });
    }
    onChangeform3buyoptions143(e) {
      this.setState({
        form3_buyoptions143: e.target.value
      });
    }
    onChangeform3buyoptions144(e) {
      this.setState({
        form3_buyoptions144: e.target.value
      });
    }
    onChangeform3buyoptions145(e) {
      this.setState({
        form3_buyoptions145: e.target.value
      });
    }
    onChangeform3buyoptions146(e) {
      this.setState({
        form3_buyoptions146: e.target.value
      });
    }
    onChangeform3buyoptions147(e) {
      this.setState({
        form3_buyoptions147: e.target.value
      });
    }
    onChangeform3buyoptions148(e) {
      this.setState({
        form3_buyoptions148: e.target.value
      });
    }
    onChangeform3buyoptions149(e) {
      this.setState({
        form3_buyoptions149: e.target.value
      });
    }
    onChangeform3buyoptions150(e) {
      this.setState({
        form3_buyoptions150: e.target.value
      });
    }
    onChangeform3buyoptions151(e) {
      this.setState({
        form3_buyoptions151: e.target.value
      });
    }
    onChangeform3buyoptions152(e) {
      this.setState({
        form3_buyoptions152: e.target.value
      });
    }
    onChangeform3buyoptions153(e) {
      this.setState({
        form3_buyoptions153: e.target.value
      });
    }
    onChangeform3buyoptions154(e) {
      this.setState({
        form3_buyoptions154: e.target.value
      });
    }
    onChangeform3buyoptions155(e) {
      this.setState({
        form3_buyoptions155: e.target.value
      });
    }
    onChangeform3buyoptions156(e) {
      this.setState({
        form3_buyoptions156: e.target.value
      });
    }
    onChangeform3buyoptions157(e) {
      this.setState({
        form3_buyoptions157: e.target.value
      });
    }
    onChangeform3buyoptions158(e) {
      this.setState({
        form3_buyoptions158: e.target.value
      });
    }
    onChangeform3buyoptions159(e) {
      this.setState({
        form3_buyoptions159: e.target.value
      });
    }
    onChangeform3buyoptions160(e) {
      this.setState({
        form3_buyoptions160: e.target.value
      });
    }
    onChangeform3buyoptions161(e) {
      this.setState({
        form3_buyoptions161: e.target.value
      });
    }
    onChangeform3buyoptions162(e) {
      this.setState({
        form3_buyoptions162: e.target.value
      });
    }
    onChangeform3buyoptions163(e) {
      this.setState({
        form3_buyoptions163: e.target.value
      });
    }
    onChangeform3buyoptions164(e) {
      this.setState({
        form3_buyoptions164: e.target.value
      });
    }
    onChangeform3buyoptions165(e) {
      this.setState({
        form3_buyoptions165: e.target.value
      });
    }
    onChangeform3buyoptions166(e) {
      this.setState({
        form3_buyoptions166: e.target.value
      });
    }
    onChangeform3buyoptions167(e) {
      this.setState({
        form3_buyoptions167: e.target.value
      });
    }
    onChangeform3buyoptions168(e) {
      this.setState({
        form3_buyoptions168: e.target.value
      });
    }
    onChangeform3buyoptions169(e) {
      this.setState({
        form3_buyoptions169: e.target.value
      });
    }
    onChangeform3buyoptions170(e) {
      this.setState({
        form3_buyoptions170: e.target.value
      });
    }
    onChangeform3buyoptions171(e) {
      this.setState({
        form3_buyoptions171: e.target.value
      });
    }
    onChangeform3buyoptions172(e) {
      this.setState({
        form3_buyoptions172: e.target.value
      });
    }
    onChangeform3buyoptions173(e) {
      this.setState({
        form3_buyoptions173: e.target.value
      });
    }
    onChangeform3buyoptions174(e) {
      this.setState({
        form3_buyoptions174: e.target.value
      });
    }
    onChangeform3buyoptions175(e) {
      this.setState({
        form3_buyoptions175: e.target.value
      });
    }
    onChangeform3buyoptions176(e) {
      this.setState({
        form3_buyoptions176: e.target.value
      });
    }
    onChangeform3buyoptions177(e) {
      this.setState({
        form3_buyoptions177: e.target.value
      });
    }
    onChangeform3buyoptions178(e) {
      this.setState({
        form3_buyoptions178: e.target.value
      });
    }
    onChangeform3buyoptions179(e) {
      this.setState({
        form3_buyoptions179: e.target.value
      });
    }
    onChangeform3buyoptions180(e) {
      this.setState({
        form3_buyoptions180: e.target.value
      });
    }
    onChangeform3buyoptions181(e) {
      this.setState({
        form3_buyoptions181: e.target.value
      });
    }
    onChangeform3buyoptions182(e) {
      this.setState({
        form3_buyoptions182: e.target.value
      });
    }
    onChangeform3buyoptions183(e) {
      this.setState({
        form3_buyoptions183: e.target.value
      });
    }
    onChangeform3buyoptions184(e) {
      this.setState({
        form3_buyoptions184: e.target.value
      });
    }
    onChangeform3buyoptions185(e) {
      this.setState({
        form3_buyoptions185: e.target.value
      });
    }
    onChangeform3buyoptions186(e) {
      this.setState({
        form3_buyoptions186: e.target.value
      });
    }
    onChangeform3buyoptions187(e) {
      this.setState({
        form3_buyoptions187: e.target.value
      });
    }
    onChangeform3buyoptions188(e) {
      this.setState({
        form3_buyoptions188: e.target.value
      });
    }
    onChangeform3buyoptions189(e) {
      this.setState({
        form3_buyoptions189: e.target.value
      });
    }
    onChangeform3buyoptions190(e) {
      this.setState({
        form3_buyoptions190: e.target.value
      });
    }
    onChangeform3buyoptions191(e) {
      this.setState({
        form3_buyoptions191: e.target.value
      });
    }
    onChangeform3buyoptions192(e) {
      this.setState({
        form3_buyoptions192: e.target.value
      });
    }
    onChangeform3buyoptions193(e) {
      this.setState({
        form3_buyoptions193: e.target.value
      });
    }
    onChangeform3buyoptions194(e) {
      this.setState({
        form3_buyoptions194: e.target.value
      });
    }
    onChangeform3buyoptions195(e) {
      this.setState({
        form3_buyoptions195: e.target.value
      });
    }
    onChangeform3buyoptions196(e) {
      this.setState({
        form3_buyoptions196: e.target.value
      });
    }
    onChangeform3buyoptions197(e) {
      this.setState({
        form3_buyoptions197: e.target.value
      });
    }
    onChangeform3buyoptions198(e) {
      this.setState({
        form3_buyoptions198: e.target.value
      });
    }
    onChangeform3buyoptions199(e) {
      this.setState({
        form3_buyoptions199: e.target.value
      });
    }
    onChangeform3buyoptions200(e) {
      this.setState({
        form3_buyoptions200: e.target.value
      });
    }
    onChangeform3buyoptions201(e) {
      this.setState({
        form3_buyoptions201: e.target.value
      });
    }
    onChangeform3buyoptions202(e) {
      this.setState({
        form3_buyoptions202: e.target.value
      });
    }
    onChangeform3buyoptions203(e) {
      this.setState({
        form3_buyoptions203: e.target.value
      });
    }
    onChangeform3buyoptions204(e) {
      this.setState({
        form3_buyoptions204: e.target.value
      });
    }
    onChangeform3buyoptions205(e) {
      this.setState({
        form3_buyoptions205: e.target.value
      });
    }
    onChangeform3buyoptions206(e) {
      this.setState({
        form3_buyoptions206: e.target.value
      });
    }
    onChangeform3buyoptions207(e) {
      this.setState({
        form3_buyoptions207: e.target.value
      });
    }
    onChangeform3buyoptions208(e) {
      this.setState({
        form3_buyoptions208: e.target.value
      });
    }
    onChangeform3buyoptions209(e) {
      this.setState({
        form3_buyoptions209: e.target.value
      });
    }
    onChangeform3buyoptions210(e) {
      this.setState({
        form3_buyoptions210: e.target.value
      });
    }
    onChangeform3buyoptions211(e) {
      this.setState({
        form3_buyoptions211: e.target.value
      });
    }
    onChangeform3buyoptions212(e) {
      this.setState({
        form3_buyoptions212: e.target.value
      });
    }
    onChangeform3buyoptions213(e) {
      this.setState({
        form3_buyoptions213: e.target.value
      });
    }
    onChangeform3buyoptions214(e) {
      this.setState({
        form3_buyoptions214: e.target.value
      });
    }
    onChangeform3buyoptions215(e) {
      this.setState({
        form3_buyoptions215: e.target.value
      });
    }
    onChangeform3buyoptions216(e) {
      this.setState({
        form3_buyoptions216: e.target.value
      });
    }
    onChangeform3buyoptions217(e) {
      this.setState({
        form3_buyoptions217: e.target.value
      });
    }
    onChangeform3buyoptions218(e) {
      this.setState({
        form3_buyoptions218: e.target.value
      });
    }
    onChangeform3buyoptions219(e) {
      this.setState({
        form3_buyoptions219: e.target.value
      });
    }
    onChangeform3buyoptions220(e) {
      this.setState({
        form3_buyoptions220: e.target.value
      });
    }
    onChangeform3buyoptions221(e) {
      this.setState({
        form3_buyoptions221: e.target.value
      });
    }
    onChangeform3buyoptions222(e) {
      this.setState({
        form3_buyoptions222: e.target.value
      });
    }
    onChangeform3buyoptions223(e) {
      this.setState({
        form3_buyoptions223: e.target.value
      });
    }
    onChangeform3buyoptions224(e) {
      this.setState({
        form3_buyoptions224: e.target.value
      });
    }
    onChangeform3buyoptions225(e) {
      this.setState({
        form3_buyoptions225: e.target.value
      });
    }
    onChangeform3buyoptions226(e) {
      this.setState({
        form3_buyoptions226: e.target.value
      });
    }
    onChangeform3buyoptions227(e) {
      this.setState({
        form3_buyoptions227: e.target.value
      });
    }
    onChangeform3buyoptions228(e) {
      this.setState({
        form3_buyoptions228: e.target.value
      });
    }
    onChangeform3buyoptions229(e) {
      this.setState({
        form3_buyoptions229: e.target.value
      });
    }
    onChangeform3buyoptions230(e) {
      this.setState({
        form3_buyoptions230: e.target.value
      });
    }
    onChangeform3buyoptions231(e) {
      this.setState({
        form3_buyoptions231: e.target.value
      });
    }
    onChangeform3buyoptions232(e) {
      this.setState({
        form3_buyoptions232: e.target.value
      });
    }
    onChangeform3buyoptions233(e) {
      this.setState({
        form3_buyoptions233: e.target.value
      });
    }
    onChangeform3buyoptions234(e) {
      this.setState({
        form3_buyoptions234: e.target.value
      });
    }
    onChangeform3buyoptions235(e) {
      this.setState({
        form3_buyoptions235: e.target.value
      });
    }
    onChangeform3buyoptions236(e) {
      this.setState({
        form3_buyoptions236: e.target.value
      });
    }
    onChangeform3buyoptions237(e) {
      this.setState({
        form3_buyoptions237: e.target.value
      });
    }
    onChangeform3buyoptions238(e) {
      this.setState({
        form3_buyoptions238: e.target.value
      });
    }
    onChangeform3buyoptions239(e) {
      this.setState({
        form3_buyoptions239: e.target.value
      });
    }
    onChangeform3buyoptions240(e) {
      this.setState({
        form3_buyoptions240: e.target.value
      });
    }
    onChangeform3buyoptions241(e) {
      this.setState({
        form3_buyoptions241: e.target.value
      });
    }
    onChangeform3buyoptions242(e) {
      this.setState({
        form3_buyoptions242: e.target.value
      });
    }
    onChangeform3buyoptions243(e) {
      this.setState({
        form3_buyoptions243: e.target.value
      });
    }
    onChangeform3buyoptions244(e) {
      this.setState({
        form3_buyoptions244: e.target.value
      });
    }
    onChangeform3buyoptions245(e) {
      this.setState({
        form3_buyoptions245: e.target.value
      });
    }
    onChangeform3buyoptions246(e) {
      this.setState({
        form3_buyoptions246: e.target.value
      });
    }
    onChangeform3buyoptions247(e) {
      this.setState({
        form3_buyoptions247: e.target.value
      });
    }
    onChangeform3buyoptions248(e) {
      this.setState({
        form3_buyoptions248: e.target.value
      });
    }
    onChangeform3buyoptions249(e) {
      this.setState({
        form3_buyoptions249: e.target.value
      });
    }
    onChangeform3buyoptions250(e) {
      this.setState({
        form3_buyoptions250: e.target.value
      });
    }
    onChangeform3buyoptions251(e) {
      this.setState({
        form3_buyoptions251: e.target.value
      });
    }
    onChangeform3buyoptions252(e) {
      this.setState({
        form3_buyoptions252: e.target.value
      });
    }
    onChangeform3buyoptions253(e) {
      this.setState({
        form3_buyoptions253: e.target.value
      });
    }
    onChangeform3buyoptions254(e) {
      this.setState({
        form3_buyoptions254: e.target.value
      });
    }
    onChangeform3buyoptions255(e) {
      this.setState({
        form3_buyoptions255: e.target.value
      });
    }
    onChangeform3buyoptions256(e) {
      this.setState({
        form3_buyoptions256: e.target.value
      });
    }
    onChangeform3buyoptions257(e) {
      this.setState({
        form3_buyoptions257: e.target.value
      });
    }
    onChangeform3buyoptions258(e) {
      this.setState({
        form3_buyoptions258: e.target.value
      });
    }
    onChangeform3buyoptions259(e) {
      this.setState({
        form3_buyoptions259: e.target.value
      });
    }
    onChangeform3buyoptions260(e) {
      this.setState({
        form3_buyoptions260: e.target.value
      });
    }
    onChangeform3buyoptions261(e) {
      this.setState({
        form3_buyoptions261: e.target.value
      });
    }
    onChangeform3buyoptions262(e) {
      this.setState({
        form3_buyoptions262: e.target.value
      });
    }
    onChangeform3buyoptions263(e) {
      this.setState({
        form3_buyoptions263: e.target.value
      });
    }
    onChangeform3buyoptions264(e) {
      this.setState({
        form3_buyoptions264: e.target.value
      });
    }
    onChangeform3buyoptions265(e) {
      this.setState({
        form3_buyoptions265: e.target.value
      });
    }
    onChangeform3buyoptions266(e) {
      this.setState({
        form3_buyoptions266: e.target.value
      });
    }
    onChangeform3buyoptions267(e) {
      this.setState({
        form3_buyoptions267: e.target.value
      });
    }
    onChangeform3buyoptions268(e) {
      this.setState({
        form3_buyoptions268: e.target.value
      });
    }
    onChangeform3buyoptions269(e) {
      this.setState({
        form3_buyoptions269: e.target.value
      });
    }
    onChangeform3buyoptions270(e) {
      this.setState({
        form3_buyoptions270: e.target.value
      });
    }
    onChangeform3buyoptions271(e) {
      this.setState({
        form3_buyoptions271: e.target.value
      });
    }
    onChangeform3buyoptions272(e) {
      this.setState({
        form3_buyoptions272: e.target.value
      });
    }
    onChangeform3buyoptions273(e) {
      this.setState({
        form3_buyoptions273: e.target.value
      });
    }
    onChangeform3buyoptions274(e) {
      this.setState({
        form3_buyoptions274: e.target.value
      });
    }
    onChangeform3buyoptions275(e) {
      this.setState({
        form3_buyoptions275: e.target.value
      });
    }
    onChangeform3buyoptions276(e) {
      this.setState({
        form3_buyoptions276: e.target.value
      });
    }
    onChangeform3buyoptions277(e) {
      this.setState({
        form3_buyoptions277: e.target.value
      });
    }
    onChangeform3buyoptions278(e) {
      this.setState({
        form3_buyoptions278: e.target.value
      });
    }
    onChangeform3buyoptions279(e) {
      this.setState({
        form3_buyoptions279: e.target.value
      });
    }
    onChangeform3buyoptions280(e) {
      this.setState({
        form3_buyoptions280: e.target.value
      });
    }
    onChangeform3buyoptions281(e) {
      this.setState({
        form3_buyoptions281: e.target.value
      });
    }
    onChangeform3buyoptions282(e) {
      this.setState({
        form3_buyoptions282: e.target.value
      });
    }
    onChangeform3buyoptions283(e) {
      this.setState({
        form3_buyoptions283: e.target.value
      });
    }
    onChangeform3buyoptions284(e) {
      this.setState({
        form3_buyoptions284: e.target.value
      });
    }
    onChangeform3buyoptions285(e) {
      this.setState({
        form3_buyoptions285: e.target.value
      });
    }
    onChangeform3buyoptions286(e) {
      this.setState({
        form3_buyoptions286: e.target.value
      });
    }
    onChangeform3buyoptions287(e) {
      this.setState({
        form3_buyoptions287: e.target.value
      });
    }
    onChangeform3buyoptions288(e) {
      this.setState({
        form3_buyoptions288: e.target.value
      });
    }
    onChangeform3buyoptions289(e) {
      this.setState({
        form3_buyoptions289: e.target.value
      });
    }
    onChangeform3buyoptions290(e) {
      this.setState({
        form3_buyoptions290: e.target.value
      });
    }
    onChangeform3buyoptions291(e) {
      this.setState({
        form3_buyoptions291: e.target.value
      });
    }
    onChangeform3buyoptions292(e) {
      this.setState({
        form3_buyoptions292: e.target.value
      });
    }
    onChangeform3buyoptions293(e) {
      this.setState({
        form3_buyoptions293: e.target.value
      });
    }
    onChangeform3buyoptions294(e) {
      this.setState({
        form3_buyoptions294: e.target.value
      });
    }
    

    onChangeform3city(e) {
      this.setState({
        form3_city: e.target.value
      });
    }
    onChangeform3state(e) {
      this.setState({
        form3_state: e.target.value
      });
    }

    onChangeform4name(e) {
      this.setState({
        form4_name: e.target.value
      });
      e.preventDefault();
    }

    onChangeform4phoneno(e) {
      this.setState({
        form4_phoneno: e.target.value
      });
    }
    onChangeform4serstate1(e) {
      this.setState({
        form4_serviceStates1: e.target.value
      });
    }
    onChangeform4serstate2(e) {
      this.setState({
        form4_serviceStates2: e.target.value
      });
    }
    onChangeform4serstate3(e) {
      this.setState({
        form4_serviceStates3: e.target.value
      });
    }
    onChangeform4serstate4(e) {
      this.setState({
        form4_serviceStates4: e.target.value
      });
    }
    onChangeform4serstate5(e) {
      this.setState({
        form4_serviceStates5: e.target.value
      });
    }
    onChangeform4serstate6(e) {
      this.setState({
        form4_serviceStates6: e.target.value
      });
    }
    onChangeform4serstate7(e) {
      this.setState({
        form4_serviceStates7: e.target.value
      });
    }
    onChangeform4serstate8(e) {
      this.setState({
        form4_serviceStates8: e.target.value
      });
    }
    onChangeform4serstate9(e) {
      this.setState({
        form4_serviceStates9: e.target.value
      });
    }
    onChangeform4serstate10(e) {
      this.setState({
        form4_serviceStates10: e.target.value
      });
    }
    onChangeform4serstate11(e) {
      this.setState({
        form4_serviceStates11: e.target.value
      });
    }
    onChangeform4serstate12(e) {
      this.setState({
        form4_serviceStates12: e.target.value
      });
    }
    onChangeform4serstate13(e) {
      this.setState({
        form4_serviceStates13: e.target.value
      });
    }
    onChangeform4serstate14(e) {
      this.setState({
        form4_serviceStates14: e.target.value
      });
    }
    onChangeform4serstate15(e) {
      this.setState({
        form4_serviceStates15: e.target.value
      });
    }
    onChangeform4serstate16(e) {
      this.setState({
        form4_serviceStates16: e.target.value
      });
    }
    onChangeform4serstate17(e) {
      this.setState({
        form4_serviceStates17: e.target.value
      });
    }
    onChangeform4serstate18(e) {
      this.setState({
        form4_serviceStates18: e.target.value
      });
    }
    onChangeform4serstate19(e) {
      this.setState({
        form4_serviceStates19: e.target.value
      });
    }
    onChangeform4serstate20(e) {
      this.setState({
        form4_serviceStates20: e.target.value
      });
    }
    onChangeform4serstate21(e) {
      this.setState({
        form4_serviceStates21: e.target.value
      });
    }
    onChangeform4serstate22(e) {
      this.setState({
        form4_serviceStates22: e.target.value
      });
    }
    onChangeform4serstate23(e) {
      this.setState({
        form4_serviceStates23: e.target.value
      });
    }
    onChangeform4serstate24(e) {
      this.setState({
        form4_serviceStates24: e.target.value
      });
    }
    onChangeform4serstate25(e) {
      this.setState({
        form4_serviceStates25: e.target.value
      });
    }
    onChangeform4serstate26(e) {
      this.setState({
        form4_serviceStates26: e.target.value
      });
    }
    onChangeform4serstate27(e) {
      this.setState({
        form4_serviceStates27: e.target.value
      });
    }
    onChangeform4serstate28(e) {
      this.setState({
        form4_serviceStates28: e.target.value
      });
    }
    onChangeform4serstate29(e) {
      this.setState({
        form4_serviceStates29: e.target.value
      });
    }
    onChangeform4serstate30(e) {
      this.setState({
        form4_serviceStates30: e.target.value
      });
    }
    onChangeform4serstate31(e) {
      this.setState({
        form4_serviceStates31: e.target.value
      });
    }
    onChangeform4serstate32(e) {
      this.setState({
        form4_serviceStates32: e.target.value
      });
    }
    onChangeform4serstate33(e) {
      this.setState({
        form4_serviceStates33: e.target.value
      });
    }
    onChangeform4serstate34(e) {
      this.setState({
        form4_serviceStates34: e.target.value
      });
    }
    onChangeform4serstate35(e) {
      this.setState({
        form4_serviceStates35: e.target.value
      });
    }
    

    onChangeform4transcomp(e) {
      this.setState({
        form4_transportationCompany: e.target.value
      });
    }
    onChangeform4city(e) {
      this.setState({
        form4_city: e.target.value
      });
    }
    onChangeform4state(e) {
      this.setState({
        form4_state: e.target.value
      });
    }


    onSubmit(e) {
      //e.preventDefault();
      
      console.log(`Form2 submitted:`);
      console.log(`Form2 Name: ${this.state.form2_name}`);
      console.log(`Form2 Phone no: ${this.state.form2_phoneno}`);
      console.log(`Form2 Organisation: ${this.state.form2_organisation}`);
      console.log(`Form2 City: ${this.state.form2_city}`);
      console.log(`Form2 State: ${this.state.form2_state}`);
      console.log(`Form2 Completed: ${this.state.form2_completed}`);

      const newForm2 = {
          form2_name: this.state.form2_name,
          form2_phoneno: this.state.form2_phoneno,
          form2_organisation: this.state.form2_organisation,
          form2_city: this.state.form2_city,
          form2_state: this.state.form2_state,
          form2_completed: this.state.form2_completed
      }

      axios.post('https://backendagrofam.herokuapp.com/form2/add', newForm2)
          .then(res => console.log(res.data));

      this.setState({
          form2_name: '',
          form2_phoneno: '',
          form2_organisation: '',
          form2_city: '',
          form2_state: '',
          form2_completed: false
      })
      
  }
  onSubmit2(e) {
    e.preventDefault();

    console.log(`Form1 submitted:`);
    console.log(`Form1 Name: ${this.state.form1_acres}`);
    console.log(`Form1 Phone no: ${this.state.form1_audit}`);
    console.log(`Form1 Commodities1: ${this.state.form1_commodities1}`);
    console.log(`Form1 Commodities2: ${this.state.form1_commodities2}`);
    console.log(`Form1 Commodities3: ${this.state.form1_commodities3}`);
    console.log(`Form1 Commodities4: ${this.state.form1_commodities4}`);
    console.log(`Form1 City: ${this.state.form1_name}`);
    console.log(`Form1 State: ${this.state.form1_phoneno}`);
    console.log(`Form1 Completed: ${this.state.form1_completed}`);

    const newForm1 = {
        form1_acres: this.state.form1_acres,
        form1_audit: this.state.form1_audit,
        form1_commodities1: this.state.form1_commodities1,
        form1_commodities2: this.state.form1_commodities2,
        form1_commodities3: this.state.form1_commodities3,
        form1_commodities4: this.state.form1_commodities4,
        form1_commodities5: this.state.form1_commodities5,
        form1_commodities6: this.state.form1_commodities6,
        form1_commodities7: this.state.form1_commodities7,
        form1_commodities8: this.state.form1_commodities8,
        form1_commodities9: this.state.form1_commodities9,
        form1_commodities10: this.state.form1_commodities10,
        form1_commodities11: this.state.form1_commodities11,
        form1_commodities12: this.state.form1_commodities12,
        form1_commodities13: this.state.form1_commodities13,
        form1_commodities14: this.state.form1_commodities14,
        form1_commodities15: this.state.form1_commodities15,
        form1_commodities16: this.state.form1_commodities16,
        form1_commodities17: this.state.form1_commodities17,
        form1_commodities18: this.state.form1_commodities18,
        form1_commodities19: this.state.form1_commodities19,
        form1_commodities20: this.state.form1_commodities20,
        form1_commodities21: this.state.form1_commodities21,
        form1_commodities22: this.state.form1_commodities22,
        form1_commodities23: this.state.form1_commodities23,
        form1_commodities24: this.state.form1_commodities24,
        form1_commodities25: this.state.form1_commodities25,
        form1_commodities26: this.state.form1_commodities26,
        form1_commodities27: this.state.form1_commodities27,
        form1_commodities28: this.state.form1_commodities28,
        form1_commodities29: this.state.form1_commodities29,
        form1_commodities30: this.state.form1_commodities30,
        form1_commodities31: this.state.form1_commodities31,
        form1_commodities32: this.state.form1_commodities32,
        form1_commodities33: this.state.form1_commodities33,
        form1_commodities34: this.state.form1_commodities34,
        form1_commodities35: this.state.form1_commodities35,
        form1_commodities36: this.state.form1_commodities36,
        form1_commodities37: this.state.form1_commodities37,
        form1_commodities38: this.state.form1_commodities38,
        form1_commodities39: this.state.form1_commodities39,
        form1_commodities40: this.state.form1_commodities40,
        form1_commodities41: this.state.form1_commodities41,
        form1_commodities42: this.state.form1_commodities42,
        form1_commodities43: this.state.form1_commodities43,
        form1_commodities44: this.state.form1_commodities44,
        form1_commodities45: this.state.form1_commodities45,
        form1_commodities46: this.state.form1_commodities46,
        form1_commodities47: this.state.form1_commodities47,
        form1_commodities48: this.state.form1_commodities48,
        form1_commodities49: this.state.form1_commodities49,
        form1_commodities50: this.state.form1_commodities50,
        form1_commodities51: this.state.form1_commodities51,
        form1_commodities52: this.state.form1_commodities52,
        form1_commodities53: this.state.form1_commodities53,
        form1_commodities54: this.state.form1_commodities54,
        form1_commodities55: this.state.form1_commodities55,
        form1_commodities56: this.state.form1_commodities56,
        form1_commodities57: this.state.form1_commodities57,
        form1_commodities58: this.state.form1_commodities58,
        form1_commodities59: this.state.form1_commodities59,
        form1_commodities60: this.state.form1_commodities60,
        form1_commodities61: this.state.form1_commodities61,
        form1_commodities62: this.state.form1_commodities62,
        form1_commodities63: this.state.form1_commodities63,
        form1_commodities64: this.state.form1_commodities64,
        form1_commodities65: this.state.form1_commodities65,
        form1_commodities66: this.state.form1_commodities66,
        form1_commodities67: this.state.form1_commodities67,
        form1_commodities68: this.state.form1_commodities68,
        form1_commodities69: this.state.form1_commodities69,
        form1_commodities70: this.state.form1_commodities70,
        form1_commodities71: this.state.form1_commodities71,
        form1_commodities72: this.state.form1_commodities72,
        form1_commodities73: this.state.form1_commodities73,
        form1_commodities74: this.state.form1_commodities74,
        form1_commodities75: this.state.form1_commodities75,
        form1_commodities76: this.state.form1_commodities76,
        form1_commodities77: this.state.form1_commodities77,
        form1_commodities78: this.state.form1_commodities78,
        form1_commodities79: this.state.form1_commodities79,
        form1_commodities80: this.state.form1_commodities80,
        form1_commodities81: this.state.form1_commodities81,
        form1_commodities82: this.state.form1_commodities82,
        form1_commodities83: this.state.form1_commodities83,
        form1_commodities84: this.state.form1_commodities84,
        form1_commodities85: this.state.form1_commodities85,
        form1_commodities86: this.state.form1_commodities86,
        form1_commodities87: this.state.form1_commodities87,
        form1_commodities88: this.state.form1_commodities88,
        form1_commodities89: this.state.form1_commodities89,
        form1_commodities90: this.state.form1_commodities90,
        form1_commodities91: this.state.form1_commodities91,
        form1_commodities92: this.state.form1_commodities92,
        form1_commodities93: this.state.form1_commodities93,
        form1_commodities94: this.state.form1_commodities94,
        form1_commodities95: this.state.form1_commodities95,
        form1_commodities96: this.state.form1_commodities96,
        form1_commodities97: this.state.form1_commodities97,
        form1_commodities98: this.state.form1_commodities98,
        form1_commodities99: this.state.form1_commodities99,
        form1_commodities100: this.state.form1_commodities100,   
        form1_commodities101: this.state.form1_commodities101,
        form1_commodities102: this.state.form1_commodities102,
        form1_commodities103: this.state.form1_commodities103,
        form1_commodities104: this.state.form1_commodities104,
        form1_commodities105: this.state.form1_commodities105,
        form1_commodities106: this.state.form1_commodities106,
        form1_commodities107: this.state.form1_commodities107,
        form1_commodities108: this.state.form1_commodities108,
        form1_commodities109: this.state.form1_commodities109,
        form1_commodities110: this.state.form1_commodities110,
        form1_commodities111: this.state.form1_commodities111,
        form1_commodities112: this.state.form1_commodities112,
        form1_commodities113: this.state.form1_commodities113,
        form1_commodities114: this.state.form1_commodities114,
        form1_commodities115: this.state.form1_commodities115,
        form1_commodities116: this.state.form1_commodities116,
        form1_commodities117: this.state.form1_commodities117,
        form1_commodities118: this.state.form1_commodities118,
        form1_commodities119: this.state.form1_commodities119,
        form1_commodities120: this.state.form1_commodities120,
        form1_commodities121: this.state.form1_commodities121,
        form1_commodities122: this.state.form1_commodities122,
        form1_commodities123: this.state.form1_commodities123,
        form1_commodities124: this.state.form1_commodities124,
        form1_commodities125: this.state.form1_commodities125,
        form1_commodities126: this.state.form1_commodities126,
        form1_commodities127: this.state.form1_commodities127,
        form1_commodities128: this.state.form1_commodities128,
        form1_commodities129: this.state.form1_commodities129,
        form1_commodities130: this.state.form1_commodities130,
        form1_commodities131: this.state.form1_commodities131,
        form1_commodities132: this.state.form1_commodities132,
        form1_commodities133: this.state.form1_commodities133,
        form1_commodities134: this.state.form1_commodities134,
        form1_commodities135: this.state.form1_commodities135,
        form1_commodities136: this.state.form1_commodities136,
        form1_commodities137: this.state.form1_commodities137,
        form1_commodities138: this.state.form1_commodities138,
        form1_commodities139: this.state.form1_commodities139,
        form1_commodities140: this.state.form1_commodities140,
        form1_commodities141: this.state.form1_commodities141,
        form1_commodities142: this.state.form1_commodities142,
        form1_commodities143: this.state.form1_commodities143,
        form1_commodities144: this.state.form1_commodities144,
        form1_commodities145: this.state.form1_commodities145,
        form1_commodities146: this.state.form1_commodities146,
        form1_commodities147: this.state.form1_commodities147,
        form1_commodities148: this.state.form1_commodities148,
        form1_commodities149: this.state.form1_commodities149,
        form1_commodities150: this.state.form1_commodities150,
        form1_commodities151: this.state.form1_commodities151,
        form1_commodities152: this.state.form1_commodities152,
        form1_commodities153: this.state.form1_commodities153,
        form1_commodities154: this.state.form1_commodities154,
        form1_commodities155: this.state.form1_commodities155,
        form1_commodities156: this.state.form1_commodities156,
        form1_commodities157: this.state.form1_commodities157,
        form1_commodities158: this.state.form1_commodities158,
        form1_commodities159: this.state.form1_commodities159,
        form1_commodities160: this.state.form1_commodities160,
        form1_commodities161: this.state.form1_commodities161,
        form1_commodities162: this.state.form1_commodities162,
        form1_commodities163: this.state.form1_commodities163,
        form1_commodities164: this.state.form1_commodities164,
        form1_commodities165: this.state.form1_commodities165,
        form1_commodities166: this.state.form1_commodities166,
        form1_commodities167: this.state.form1_commodities167,
        form1_commodities168: this.state.form1_commodities168,
        form1_commodities169: this.state.form1_commodities169,
        form1_commodities170: this.state.form1_commodities170,
        form1_commodities171: this.state.form1_commodities171,
        form1_commodities172: this.state.form1_commodities172,
        form1_commodities173: this.state.form1_commodities173,
        form1_commodities174: this.state.form1_commodities174,
        form1_commodities175: this.state.form1_commodities175,
        form1_commodities176: this.state.form1_commodities176,
        form1_commodities177: this.state.form1_commodities177,
        form1_commodities178: this.state.form1_commodities178,
        form1_commodities179: this.state.form1_commodities179,
        form1_commodities180: this.state.form1_commodities180,
        form1_commodities181: this.state.form1_commodities181,
        form1_commodities182: this.state.form1_commodities182,
        form1_commodities183: this.state.form1_commodities183,
        form1_commodities184: this.state.form1_commodities184,
        form1_commodities185: this.state.form1_commodities185,
        form1_commodities186: this.state.form1_commodities186,
        form1_commodities187: this.state.form1_commodities187,
        form1_commodities188: this.state.form1_commodities188,
        form1_commodities189: this.state.form1_commodities189,
        form1_commodities190: this.state.form1_commodities190,
        form1_commodities191: this.state.form1_commodities191,
        form1_commodities192: this.state.form1_commodities192,
        form1_commodities193: this.state.form1_commodities193,
        form1_commodities194: this.state.form1_commodities194,
        form1_commodities195: this.state.form1_commodities195,
        form1_commodities196: this.state.form1_commodities196,
        form1_commodities197: this.state.form1_commodities197,
        form1_commodities198: this.state.form1_commodities198,
        form1_commodities199: this.state.form1_commodities199,
        form1_commodities200: this.state.form1_commodities200, 
        form1_commodities201: this.state.form1_commodities201,
        form1_commodities202: this.state.form1_commodities202,
        form1_commodities203: this.state.form1_commodities203,
        form1_commodities204: this.state.form1_commodities204,
        form1_commodities205: this.state.form1_commodities205,
        form1_commodities206: this.state.form1_commodities206,
        form1_commodities207: this.state.form1_commodities207,
        form1_commodities208: this.state.form1_commodities208,
        form1_commodities209: this.state.form1_commodities209,
        form1_commodities210: this.state.form1_commodities210,
        form1_commodities211: this.state.form1_commodities211,
        form1_commodities212: this.state.form1_commodities212,
        form1_commodities213: this.state.form1_commodities213,
        form1_commodities214: this.state.form1_commodities214,
        form1_commodities215: this.state.form1_commodities215,
        form1_commodities216: this.state.form1_commodities216,
        form1_commodities217: this.state.form1_commodities217,
        form1_commodities218: this.state.form1_commodities218,
        form1_commodities219: this.state.form1_commodities219,
        form1_commodities220: this.state.form1_commodities220,
        form1_commodities221: this.state.form1_commodities221,
        form1_commodities222: this.state.form1_commodities222,
        form1_commodities223: this.state.form1_commodities223,
        form1_commodities224: this.state.form1_commodities224,
        form1_commodities225: this.state.form1_commodities225,
        form1_commodities226: this.state.form1_commodities226,
        form1_commodities227: this.state.form1_commodities227,
        form1_commodities228: this.state.form1_commodities228,
        form1_commodities229: this.state.form1_commodities229,
        form1_commodities230: this.state.form1_commodities230,
        form1_commodities231: this.state.form1_commodities231,
        form1_commodities232: this.state.form1_commodities232,
        form1_commodities233: this.state.form1_commodities233,
        form1_commodities234: this.state.form1_commodities234,
        form1_commodities235: this.state.form1_commodities235,
        form1_commodities236: this.state.form1_commodities236,
        form1_commodities237: this.state.form1_commodities237,
        form1_commodities238: this.state.form1_commodities238,
        form1_commodities239: this.state.form1_commodities239,
        form1_commodities240: this.state.form1_commodities240,
        form1_commodities241: this.state.form1_commodities241,
        form1_commodities242: this.state.form1_commodities242,
        form1_commodities243: this.state.form1_commodities243,
        form1_commodities244: this.state.form1_commodities244,
        form1_commodities245: this.state.form1_commodities245,
        form1_commodities246: this.state.form1_commodities246,
        form1_commodities247: this.state.form1_commodities247,
        form1_commodities248: this.state.form1_commodities48,
        form1_commodities249: this.state.form1_commodities249,
        form1_commodities250: this.state.form1_commodities250,
        form1_commodities251: this.state.form1_commodities251,
        form1_commodities252: this.state.form1_commodities252,
        form1_commodities253: this.state.form1_commodities253,
        form1_commodities254: this.state.form1_commodities254,
        form1_commodities255: this.state.form1_commodities255,
        form1_commodities256: this.state.form1_commodities256,
        form1_commodities257: this.state.form1_commodities257,
        form1_commodities258: this.state.form1_commodities258,
        form1_commodities259: this.state.form1_commodities259,
        form1_commodities260: this.state.form1_commodities260,
        form1_commodities261: this.state.form1_commodities261,
        form1_commodities262: this.state.form1_commodities262,
        form1_commodities263: this.state.form1_commodities263,
        form1_commodities264: this.state.form1_commodities264,
        form1_commodities265: this.state.form1_commodities265,
        form1_commodities266: this.state.form1_commodities266,
        form1_commodities267: this.state.form1_commodities267,
        form1_commodities268: this.state.form1_commodities268,
        form1_commodities269: this.state.form1_commodities269,
        form1_commodities270: this.state.form1_commodities270,
        form1_commodities271: this.state.form1_commodities271,
        form1_commodities272: this.state.form1_commodities272,
        form1_commodities273: this.state.form1_commodities273,
        form1_commodities274: this.state.form1_commodities274,
        form1_commodities275: this.state.form1_commodities275,
        form1_commodities276: this.state.form1_commodities276,
        form1_commodities277: this.state.form1_commodities277,
        form1_commodities278: this.state.form1_commodities278,
        form1_commodities279: this.state.form1_commodities279,
        form1_commodities280: this.state.form1_commodities280,
        form1_commodities281: this.state.form1_commodities281,
        form1_commodities282: this.state.form1_commodities282,
        form1_commodities283: this.state.form1_commodities283,
        form1_commodities284: this.state.form1_commodities284,
        form1_commodities285: this.state.form1_commodities285,
        form1_commodities286: this.state.form1_commodities286,
        form1_commodities287: this.state.form1_commodities287,
        form1_commodities288: this.state.form1_commodities288,
        form1_commodities289: this.state.form1_commodities289,
        form1_commodities290: this.state.form1_commodities290,
        form1_commodities291: this.state.form1_commodities291,
        form1_commodities292: this.state.form1_commodities292,
        form1_commodities293: this.state.form1_commodities293,
        form1_commodities294: this.state.form1_commodities294,
             
        form1_name: this.state.form1_name,
        form1_phoneno: this.state.form1_phoneno,
        form1_completed: this.state.form1_completed
    }

    axios.post('https://backendagrofam.herokuapp.com/form1/add1', newForm1)
        .then(res => console.log(res.data));

    this.setState({
        form1_acres: '',
        form1_audit: '',
        form1_commodities1: '',
        form1_commodities2: '',
        form1_commodities3: '',
        form1_commodities4: '',
        form1_commodities5: '',
        form1_commodities6: '',
        form1_commodities7: '',
        form1_commodities8: '',
        form1_commodities9: '',
        form1_commodities10: '',
        form1_commodities11: '',
        form1_commodities12: '',
        form1_commodities13: '',
        form1_commodities14: '',
        form1_commodities15: '',
        form1_commodities16: '',
        form1_commodities17: '',
        form1_commodities18: '',
        form1_commodities19: '',
        form1_commodities20: '',
        form1_commodities21: '',
        form1_commodities22: '',
        form1_commodities23: '',
        form1_commodities24: '',
        form1_commodities25: '',
        form1_commodities26: '',
        form1_commodities27: '',
        form1_commodities28: '',
        form1_commodities29: '',
        form1_commodities30: '',
        form1_commodities31: '',
        form1_commodities32: '',
        form1_commodities33: '',
        form1_commodities34: '',
        form1_commodities35: '',
        form1_commodities36: '',
        form1_commodities37: '',
        form1_commodities38: '',
        form1_commodities39: '',
        form1_commodities40: '',
        form1_commodities41: '',
        form1_commodities42: '',
        form1_commodities43: '',
        form1_commodities44: '',
        form1_commodities45: '',
        form1_commodities46: '',
        form1_commodities47: '',
        form1_commodities48: '',
        form1_commodities49: '',
        form1_commodities50: '',
        form1_commodities51: '',
        form1_commodities52: '',
        form1_commodities53: '',
        form1_commodities54: '',
        form1_commodities55: '',
        form1_commodities56: '',
        form1_commodities57: '',
        form1_commodities58: '',
        form1_commodities59: '',
        form1_commodities60: '',
        form1_commodities61: '',
        form1_commodities62: '',
        form1_commodities63: '',
        form1_commodities64: '',
        form1_commodities65: '',
        form1_commodities66: '',
        form1_commodities67: '',
        form1_commodities68: '',
        form1_commodities69: '',
        form1_commodities70: '',
        form1_commodities71: '',
        form1_commodities72: '',
        form1_commodities73: '',
        form1_commodities74: '',
        form1_commodities75: '',
        form1_commodities76: '',
        form1_commodities77: '',
        form1_commodities78: '',
        form1_commodities79: '',
        form1_commodities80: '',
        form1_commodities81: '',
        form1_commodities82: '',
        form1_commodities83: '',
        form1_commodities84: '',
        form1_commodities85: '',
        form1_commodities86: '',
        form1_commodities87: '',
        form1_commodities88: '',
        form1_commodities89: '',
        form1_commodities90: '',
        form1_commodities91: '',
        form1_commodities92: '',
        form1_commodities93: '',
        form1_commodities94: '',
        form1_commodities95: '',
        form1_commodities96: '',
        form1_commodities97: '',
        form1_commodities98: '',
        form1_commodities99: '',
        form1_commodities100: '',
        form1_commodities101: '',
        form1_commodities102: '',
        form1_commodities103: '',
        form1_commodities104: '',
        form1_commodities105: '',
        form1_commodities106: '',
        form1_commodities107: '',
        form1_commodities108: '',
        form1_commodities109: '',
        form1_commodities110: '',
        form1_commodities111: '',
        form1_commodities112: '',
        form1_commodities113: '',
        form1_commodities114: '',
        form1_commodities115: '',
        form1_commodities116: '',
        form1_commodities117: '',
        form1_commodities118: '',
        form1_commodities119: '',
        form1_commodities120: '',
        form1_commodities121: '',
        form1_commodities122: '',
        form1_commodities123: '',
        form1_commodities124: '',
        form1_commodities125: '',
        form1_commodities126: '',
        form1_commodities127: '',
        form1_commodities128: '',
        form1_commodities129: '',
        form1_commodities130: '',
        form1_commodities131: '',
        form1_commodities132: '',
        form1_commodities133: '',
        form1_commodities134: '',
        form1_commodities135: '',
        form1_commodities136: '',
        form1_commodities137: '',
        form1_commodities138: '',
        form1_commodities139: '',
        form1_commodities140: '',
        form1_commodities141: '',
        form1_commodities142: '',
        form1_commodities143: '',
        form1_commodities144: '',
        form1_commodities145: '',
        form1_commodities146: '',
        form1_commodities147: '',
        form1_commodities148: '',
        form1_commodities149: '',
        form1_commodities150: '',
        form1_commodities151: '',
        form1_commodities152: '',
        form1_commodities153: '',
        form1_commodities154: '',
        form1_commodities155: '',
        form1_commodities156: '',
        form1_commodities157: '',
        form1_commodities158: '',
        form1_commodities159: '',
        form1_commodities160: '',
        form1_commodities161: '',
        form1_commodities162: '',
        form1_commodities163: '',
        form1_commodities164: '',
        form1_commodities165: '',
        form1_commodities166: '',
        form1_commodities167: '',
        form1_commodities168: '',
        form1_commodities169: '',
        form1_commodities170: '',
        form1_commodities171: '',
        form1_commodities172: '',
        form1_commodities173: '',
        form1_commodities174: '',
        form1_commodities175: '',
        form1_commodities176: '',
        form1_commodities177: '',
        form1_commodities178: '',
        form1_commodities179: '',
        form1_commodities180: '',
        form1_commodities181: '',
        form1_commodities182: '',
        form1_commodities183: '',
        form1_commodities184: '',
        form1_commodities185: '',
        form1_commodities186: '',
        form1_commodities187: '',
        form1_commodities188: '',
        form1_commodities189: '',
        form1_commodities190: '',
        form1_commodities191: '',
        form1_commodities192: '',
        form1_commodities193: '',
        form1_commodities194: '',
        form1_commodities195: '',
        form1_commodities196: '',
        form1_commodities197: '',
        form1_commodities198: '',
        form1_commodities199: '',
        form1_commodities200: '',
        form1_commodities201: '',
        form1_commodities202: '',
        form1_commodities203: '',
        form1_commodities204: '',
        form1_commodities205: '',
        form1_commodities206: '',
        form1_commodities207: '',
        form1_commodities208: '',
        form1_commodities209: '',
        form1_commodities210: '',
        form1_commodities211: '',
        form1_commodities212: '',
        form1_commodities213: '',
        form1_commodities214: '',
        form1_commodities215: '',
        form1_commodities216: '',
        form1_commodities217: '',
        form1_commodities218: '',
        form1_commodities219: '',
        form1_commodities220: '',
        form1_commodities221: '',
        form1_commodities222: '',
        form1_commodities223: '',
        form1_commodities224: '',
        form1_commodities225: '',
        form1_commodities226: '',
        form1_commodities227: '',
        form1_commodities228: '',
        form1_commodities229: '',
        form1_commodities230: '',
        form1_commodities231: '',
        form1_commodities232: '',
        form1_commodities233: '',
        form1_commodities234: '',
        form1_commodities235: '',
        form1_commodities236: '',
        form1_commodities237: '',
        form1_commodities238: '',
        form1_commodities239: '',
        form1_commodities240: '',
        form1_commodities241: '',
        form1_commodities242: '',
        form1_commodities243: '',
        form1_commodities244: '',
        form1_commodities245: '',
        form1_commodities246: '',
        form1_commodities247: '',
        form1_commodities248: '',
        form1_commodities249: '',
        form1_commodities250: '',
        form1_commodities251: '',
        form1_commodities252: '',
        form1_commodities253: '',
        form1_commodities254: '',
        form1_commodities255: '',
        form1_commodities256: '',
        form1_commodities257: '',
        form1_commodities258: '',
        form1_commodities259: '',
        form1_commodities260: '',
        form1_commodities261: '',
        form1_commodities262: '',
        form1_commodities263: '',
        form1_commodities264: '',
        form1_commodities265: '',
        form1_commodities266: '',
        form1_commodities267: '',
        form1_commodities268: '',
        form1_commodities269: '',
        form1_commodities270: '',
        form1_commodities271: '',
        form1_commodities272: '',
        form1_commodities273: '',
        form1_commodities274: '',
        form1_commodities275: '',
        form1_commodities276: '',
        form1_commodities277: '',
        form1_commodities278: '',
        form1_commodities279: '',
        form1_commodities280: '',
        form1_commodities281: '',
        form1_commodities282: '',
        form1_commodities283: '',
        form1_commodities284: '',
        form1_commodities285: '',
        form1_commodities286: '',
        form1_commodities287: '',
        form1_commodities288: '',
        form1_commodities289: '',
        form1_commodities290: '',
        form1_commodities291: '',
        form1_commodities292: '',
        form1_commodities293: '',
        form1_commodities294: '',
        
        
        form1_name: '',
        form1_phoneno: '',
        form1_completed: false
    })
}
onSubmit3(e) {
  //e.preventDefault();

  console.log(`Form3 submitted:`);
  console.log(`Form3 Name: ${this.state.form3_name}`);
  console.log(`Form3 Phone no: ${this.state.form3_phoneno}`);
  console.log(`Form3 Buyoptions: ${this.state.form3_buyoptions1}`);
  console.log(`Form3 Buyoptions: ${this.state.form3_buyoptions2}`);
  console.log(`Form3 Buyoptions: ${this.state.form3_buyoptions3}`);
  console.log(`Form3 Buyoptions: ${this.state.form3_buyoptions4}`);
  console.log(`Form3 City: ${this.state.form3_city}`);
  console.log(`Form3 State: ${this.state.form3_state}`);
  console.log(`Form3 Completed: ${this.state.form3_completed}`);

  const newForm3 = {
      form3_name: this.state.form3_name,
      form3_phoneno: this.state.form3_phoneno,
      form3_buyoptions1: this.state.form3_buyoptions1,
      form3_buyoptions2: this.state.form3_buyoptions2,
      form3_buyoptions3: this.state.form3_buyoptions3,
      form3_buyoptions4: this.state.form3_buyoptions4,
      form3_buyoptions5: this.state.form3_buyoptions5,
      form3_buyoptions6: this.state.form3_buyoptions6,
      form3_buyoptions7: this.state.form3_buyoptions7,
      form3_buyoptions8: this.state.form3_buyoptions8,
      form3_buyoptions9: this.state.form3_buyoptions9,
      form3_buyoptions10: this.state.form3_buyoptions10,
      form3_buyoptions11: this.state.form3_buyoptions11,
      form3_buyoptions12: this.state.form3_buyoptions12,
      form3_buyoptions13: this.state.form3_buyoptions13,
      form3_buyoptions14: this.state.form3_buyoptions14,
      form3_buyoptions15: this.state.form3_buyoptions15,
      form3_buyoptions16: this.state.form3_buyoptions16,
      form3_buyoptions17: this.state.form3_buyoptions17,
      form3_buyoptions18: this.state.form3_buyoptions18,
      form3_buyoptions19: this.state.form3_buyoptions19,
      form3_buyoptions20: this.state.form3_buyoptions20,
      form3_buyoptions21: this.state.form3_buyoptions21,
      form3_buyoptions22: this.state.form3_buyoptions22,
      form3_buyoptions23: this.state.form3_buyoptions23,
      form3_buyoptions24: this.state.form3_buyoptions24,
      form3_buyoptions25: this.state.form3_buyoptions25,
      form3_buyoptions26: this.state.form3_buyoptions26,
      form3_buyoptions27: this.state.form3_buyoptions27,
      form3_buyoptions28: this.state.form3_buyoptions28,
      form3_buyoptions29: this.state.form3_buyoptions29,
      form3_buyoptions30: this.state.form3_buyoptions30,
      form3_buyoptions31: this.state.form3_buyoptions31,
      form3_buyoptions32: this.state.form3_buyoptions32,
      form3_buyoptions33: this.state.form3_buyoptions33,
      form3_buyoptions34: this.state.form3_buyoptions34,
      form3_buyoptions35: this.state.form3_buyoptions35,
      form3_buyoptions36: this.state.form3_buyoptions36,
      form3_buyoptions37: this.state.form3_buyoptions37,
      form3_buyoptions38: this.state.form3_buyoptions38,
      form3_buyoptions39: this.state.form3_buyoptions39,
      form3_buyoptions40: this.state.form3_buyoptions40,
      form3_buyoptions41: this.state.form3_buyoptions41,
      form3_buyoptions42: this.state.form3_buyoptions42,
      form3_buyoptions43: this.state.form3_buyoptions43,
      form3_buyoptions44: this.state.form3_buyoptions44,
      form3_buyoptions45: this.state.form3_buyoptions45,
      form3_buyoptions46: this.state.form3_buyoptions46,
      form3_buyoptions47: this.state.form3_buyoptions47,
      form3_buyoptions48: this.state.form3_buyoptions48,
      form3_buyoptions49: this.state.form3_buyoptions49,
      form3_buyoptions50: this.state.form3_buyoptions50,
      form3_buyoptions51: this.state.form3_buyoptions51,
      form3_buyoptions52: this.state.form3_buyoptions52,
      form3_buyoptions53: this.state.form3_buyoptions53,
      form3_buyoptions54: this.state.form3_buyoptions54,
      form3_buyoptions55: this.state.form3_buyoptions55,
      form3_buyoptions56: this.state.form3_buyoptions56,
      form3_buyoptions57: this.state.form3_buyoptions57,
      form3_buyoptions58: this.state.form3_buyoptions58,
      form3_buyoptions59: this.state.form3_buyoptions59,
      form3_buyoptions60: this.state.form3_buyoptions60,
      form3_buyoptions61: this.state.form3_buyoptions61,
      form3_buyoptions62: this.state.form3_buyoptions62,
      form3_buyoptions63: this.state.form3_buyoptions63,
      form3_buyoptions64: this.state.form3_buyoptions64,
      form3_buyoptions65: this.state.form3_buyoptions65,
      form3_buyoptions66: this.state.form3_buyoptions66,
      form3_buyoptions67: this.state.form3_buyoptions67,
      form3_buyoptions68: this.state.form3_buyoptions68,
      form3_buyoptions69: this.state.form3_buyoptions69,
      form3_buyoptions70: this.state.form3_buyoptions70,
      form3_buyoptions71: this.state.form3_buyoptions71,
      form3_buyoptions72: this.state.form3_buyoptions72,
      form3_buyoptions73: this.state.form3_buyoptions73,
      form3_buyoptions74: this.state.form3_buyoptions74,
      form3_buyoptions75: this.state.form3_buyoptions75,
      form3_buyoptions76: this.state.form3_buyoptions76,
      form3_buyoptions77: this.state.form3_buyoptions77,
      form3_buyoptions78: this.state.form3_buyoptions78,
      form3_buyoptions79: this.state.form3_buyoptions79,
      form3_buyoptions80: this.state.form3_buyoptions80,
      form3_buyoptions81: this.state.form3_buyoptions81,
      form3_buyoptions82: this.state.form3_buyoptions82,
      form3_buyoptions83: this.state.form3_buyoptions83,
      form3_buyoptions84: this.state.form3_buyoptions84,
      form3_buyoptions85: this.state.form3_buyoptions85,
      form3_buyoptions86: this.state.form3_buyoptions86,
      form3_buyoptions87: this.state.form3_buyoptions87,
      form3_buyoptions88: this.state.form3_buyoptions88,
      form3_buyoptions89: this.state.form3_buyoptions89,
      form3_buyoptions90: this.state.form3_buyoptions90,
      form3_buyoptions91: this.state.form3_buyoptions91,
      form3_buyoptions92: this.state.form3_buyoptions92,
      form3_buyoptions93: this.state.form3_buyoptions93,
      form3_buyoptions94: this.state.form3_buyoptions94,
      form3_buyoptions95: this.state.form3_buyoptions95,
      form3_buyoptions96: this.state.form3_buyoptions96,
      form3_buyoptions97: this.state.form3_buyoptions97,
      form3_buyoptions98: this.state.form3_buyoptions98,
      form3_buyoptions99: this.state.form3_buyoptions99,
      form3_buyoptions100: this.state.form3_buyoptions100,
      form3_buyoptions101: this.state.form3_buyoptions101,
      form3_buyoptions102: this.state.form3_buyoptions102,
      form3_buyoptions103: this.state.form3_buyoptions103,
      form3_buyoptions104: this.state.form3_buyoptions104,
      form3_buyoptions105: this.state.form3_buyoptions105,
      form3_buyoptions106: this.state.form3_buyoptions106,
      form3_buyoptions107: this.state.form3_buyoptions107,
      form3_buyoptions108: this.state.form3_buyoptions108,
      form3_buyoptions109: this.state.form3_buyoptions109,
      form3_buyoptions110: this.state.form3_buyoptions110,
      form3_buyoptions111: this.state.form3_buyoptions111,
      form3_buyoptions112: this.state.form3_buyoptions112,
      form3_buyoptions113: this.state.form3_buyoptions113,
      form3_buyoptions114: this.state.form3_buyoptions114,
      form3_buyoptions115: this.state.form3_buyoptions115,
      form3_buyoptions116: this.state.form3_buyoptions116,
      form3_buyoptions117: this.state.form3_buyoptions117,
      form3_buyoptions118: this.state.form3_buyoptions118,
      form3_buyoptions119: this.state.form3_buyoptions119,
      form3_buyoptions120: this.state.form3_buyoptions120,
      form3_buyoptions121: this.state.form3_buyoptions121,
      form3_buyoptions122: this.state.form3_buyoptions122,
      form3_buyoptions123: this.state.form3_buyoptions123,
      form3_buyoptions124: this.state.form3_buyoptions124,
      form3_buyoptions125: this.state.form3_buyoptions125,
      form3_buyoptions126: this.state.form3_buyoptions126,
      form3_buyoptions127: this.state.form3_buyoptions127,
      form3_buyoptions128: this.state.form3_buyoptions128,
      form3_buyoptions129: this.state.form3_buyoptions129,
      form3_buyoptions130: this.state.form3_buyoptions130,
      form3_buyoptions131: this.state.form3_buyoptions131,
      form3_buyoptions132: this.state.form3_buyoptions132,
      form3_buyoptions133: this.state.form3_buyoptions133,
      form3_buyoptions134: this.state.form3_buyoptions134,
      form3_buyoptions135: this.state.form3_buyoptions135,
      form3_buyoptions136: this.state.form3_buyoptions136,
      form3_buyoptions137: this.state.form3_buyoptions137,
      form3_buyoptions138: this.state.form3_buyoptions138,
      form3_buyoptions139: this.state.form3_buyoptions139,
      form3_buyoptions140: this.state.form3_buyoptions140,
      form3_buyoptions141: this.state.form3_buyoptions141,
      form3_buyoptions142: this.state.form3_buyoptions142,
      form3_buyoptions143: this.state.form3_buyoptions143,
      form3_buyoptions144: this.state.form3_buyoptions144,
      form3_buyoptions145: this.state.form3_buyoptions145,
      form3_buyoptions146: this.state.form3_buyoptions146,
      form3_buyoptions147: this.state.form3_buyoptions147,
      form3_buyoptions148: this.state.form3_buyoptions148,
      form3_buyoptions149: this.state.form3_buyoptions149,
      form3_buyoptions150: this.state.form3_buyoptions150,
      form3_buyoptions151: this.state.form3_buyoptions151,
      form3_buyoptions152: this.state.form3_buyoptions152,
      form3_buyoptions153: this.state.form3_buyoptions153,
      form3_buyoptions154: this.state.form3_buyoptions154,
      form3_buyoptions155: this.state.form3_buyoptions155,
      form3_buyoptions156: this.state.form3_buyoptions156,
      form3_buyoptions157: this.state.form3_buyoptions157,
      form3_buyoptions158: this.state.form3_buyoptions158,
      form3_buyoptions159: this.state.form3_buyoptions159,
      form3_buyoptions160: this.state.form3_buyoptions160,
      form3_buyoptions161: this.state.form3_buyoptions161,
      form3_buyoptions162: this.state.form3_buyoptions162,
      form3_buyoptions163: this.state.form3_buyoptions163,
      form3_buyoptions164: this.state.form3_buyoptions164,
      form3_buyoptions165: this.state.form3_buyoptions165,
      form3_buyoptions166: this.state.form3_buyoptions166,
      form3_buyoptions167: this.state.form3_buyoptions167,
      form3_buyoptions168: this.state.form3_buyoptions168,
      form3_buyoptions169: this.state.form3_buyoptions169,
      form3_buyoptions170: this.state.form3_buyoptions170,
      form3_buyoptions171: this.state.form3_buyoptions171,
      form3_buyoptions172: this.state.form3_buyoptions172,
      form3_buyoptions173: this.state.form3_buyoptions173,
      form3_buyoptions174: this.state.form3_buyoptions174,
      form3_buyoptions175: this.state.form3_buyoptions175,
      form3_buyoptions176: this.state.form3_buyoptions176,
      form3_buyoptions177: this.state.form3_buyoptions177,
      form3_buyoptions178: this.state.form3_buyoptions178,
      form3_buyoptions179: this.state.form3_buyoptions179,
      form3_buyoptions180: this.state.form3_buyoptions180,
      form3_buyoptions181: this.state.form3_buyoptions181,
      form3_buyoptions182: this.state.form3_buyoptions182,
      form3_buyoptions183: this.state.form3_buyoptions183,
      form3_buyoptions184: this.state.form3_buyoptions184,
      form3_buyoptions185: this.state.form3_buyoptions185,
      form3_buyoptions186: this.state.form3_buyoptions186,
      form3_buyoptions187: this.state.form3_buyoptions187,
      form3_buyoptions188: this.state.form3_buyoptions188,
      form3_buyoptions189: this.state.form3_buyoptions189,
      form3_buyoptions190: this.state.form3_buyoptions190,
      form3_buyoptions191: this.state.form3_buyoptions191,
      form3_buyoptions192: this.state.form3_buyoptions192,
      form3_buyoptions193: this.state.form3_buyoptions193,
      form3_buyoptions194: this.state.form3_buyoptions194,
      form3_buyoptions195: this.state.form3_buyoptions195,
      form3_buyoptions196: this.state.form3_buyoptions196,
      form3_buyoptions197: this.state.form3_buyoptions197,
      form3_buyoptions198: this.state.form3_buyoptions198,
      form3_buyoptions199: this.state.form3_buyoptions199,
      form3_buyoptions200: this.state.form3_buyoptions200,
      form3_buyoptions201: this.state.form3_buyoptions201,
      form3_buyoptions202: this.state.form3_buyoptions202,
      form3_buyoptions203: this.state.form3_buyoptions203,
      form3_buyoptions204: this.state.form3_buyoptions204,
      form3_buyoptions205: this.state.form3_buyoptions205,
      form3_buyoptions206: this.state.form3_buyoptions206,
      form3_buyoptions207: this.state.form3_buyoptions207,
      form3_buyoptions208: this.state.form3_buyoptions208,
      form3_buyoptions209: this.state.form3_buyoptions209,
      form3_buyoptions210: this.state.form3_buyoptions210,
      form3_buyoptions211: this.state.form3_buyoptions211,
      form3_buyoptions212: this.state.form3_buyoptions212,
      form3_buyoptions213: this.state.form3_buyoptions213,
      form3_buyoptions214: this.state.form3_buyoptions214,
      form3_buyoptions215: this.state.form3_buyoptions215,
      form3_buyoptions216: this.state.form3_buyoptions216,
      form3_buyoptions217: this.state.form3_buyoptions217,
      form3_buyoptions218: this.state.form3_buyoptions218,
      form3_buyoptions219: this.state.form3_buyoptions219,
      form3_buyoptions220: this.state.form3_buyoptions220,
      form3_buyoptions221: this.state.form3_buyoptions221,
      form3_buyoptions222: this.state.form3_buyoptions222,
      form3_buyoptions223: this.state.form3_buyoptions223,
      form3_buyoptions224: this.state.form3_buyoptions224,
      form3_buyoptions225: this.state.form3_buyoptions225,
      form3_buyoptions226: this.state.form3_buyoptions226,
      form3_buyoptions227: this.state.form3_buyoptions227,
      form3_buyoptions228: this.state.form3_buyoptions228,
      form3_buyoptions229: this.state.form3_buyoptions229,
      form3_buyoptions230: this.state.form3_buyoptions230,
      form3_buyoptions231: this.state.form3_buyoptions231,
      form3_buyoptions232: this.state.form3_buyoptions232,
      form3_buyoptions233: this.state.form3_buyoptions233,
      form3_buyoptions234: this.state.form3_buyoptions234,
      form3_buyoptions235: this.state.form3_buyoptions235,
      form3_buyoptions236: this.state.form3_buyoptions236,
      form3_buyoptions237: this.state.form3_buyoptions237,
      form3_buyoptions238: this.state.form3_buyoptions238,
      form3_buyoptions239: this.state.form3_buyoptions239,
      form3_buyoptions240: this.state.form3_buyoptions240,
      form3_buyoptions241: this.state.form3_buyoptions241,
      form3_buyoptions242: this.state.form3_buyoptions242,
      form3_buyoptions243: this.state.form3_buyoptions243,
      form3_buyoptions244: this.state.form3_buyoptions244,
      form3_buyoptions245: this.state.form3_buyoptions245,
      form3_buyoptions246: this.state.form3_buyoptions246,
      form3_buyoptions247: this.state.form3_buyoptions247,
      form3_buyoptions248: this.state.form3_buyoptions248,
      form3_buyoptions249: this.state.form3_buyoptions249,
      form3_buyoptions250: this.state.form3_buyoptions250,
      form3_buyoptions251: this.state.form3_buyoptions251,
      form3_buyoptions252: this.state.form3_buyoptions252,
      form3_buyoptions253: this.state.form3_buyoptions253,
      form3_buyoptions254: this.state.form3_buyoptions254,
      form3_buyoptions255: this.state.form3_buyoptions255,
      form3_buyoptions256: this.state.form3_buyoptions256,
      form3_buyoptions257: this.state.form3_buyoptions257,
      form3_buyoptions258: this.state.form3_buyoptions258,
      form3_buyoptions259: this.state.form3_buyoptions259,
      form3_buyoptions260: this.state.form3_buyoptions260,
      form3_buyoptions261: this.state.form3_buyoptions261,
      form3_buyoptions262: this.state.form3_buyoptions262,
      form3_buyoptions263: this.state.form3_buyoptions263,
      form3_buyoptions264: this.state.form3_buyoptions264,
      form3_buyoptions265: this.state.form3_buyoptions265,
      form3_buyoptions266: this.state.form3_buyoptions266,
      form3_buyoptions267: this.state.form3_buyoptions267,
      form3_buyoptions268: this.state.form3_buyoptions268,
      form3_buyoptions269: this.state.form3_buyoptions269,
      form3_buyoptions270: this.state.form3_buyoptions270,
      form3_buyoptions271: this.state.form3_buyoptions271,
      form3_buyoptions272: this.state.form3_buyoptions272,
      form3_buyoptions273: this.state.form3_buyoptions273,
      form3_buyoptions274: this.state.form3_buyoptions274,
      form3_buyoptions275: this.state.form3_buyoptions275,
      form3_buyoptions276: this.state.form3_buyoptions276,
      form3_buyoptions277: this.state.form3_buyoptions277,
      form3_buyoptions278: this.state.form3_buyoptions278,
      form3_buyoptions279: this.state.form3_buyoptions279,
      form3_buyoptions280: this.state.form3_buyoptions280,
      form3_buyoptions281: this.state.form3_buyoptions281,
      form3_buyoptions282: this.state.form3_buyoptions282,
      form3_buyoptions283: this.state.form3_buyoptions283,
      form3_buyoptions284: this.state.form3_buyoptions284,
      form3_buyoptions285: this.state.form3_buyoptions285,
      form3_buyoptions286: this.state.form3_buyoptions286,
      form3_buyoptions287: this.state.form3_buyoptions287,
      form3_buyoptions288: this.state.form3_buyoptions288,
      form3_buyoptions289: this.state.form3_buyoptions289,
      form3_buyoptions290: this.state.form3_buyoptions290,
      form3_buyoptions291: this.state.form3_buyoptions291,
      form3_buyoptions292: this.state.form3_buyoptions292,
      form3_buyoptions293: this.state.form3_buyoptions293,
      form3_buyoptions294: this.state.form3_buyoptions294,
      
      
      form3_city: this.state.form3_city,
      form3_state: this.state.form3_state,
      form3_completed: this.state.form3_completed
  }

  axios.post('https://backendagrofam.herokuapp.com/form3/add3', newForm3)
      .then(res => console.log(res.data));

  this.setState({
      form3_name: '',
      form3_phoneno: '',
      form3_buyoptions1: '',
      form3_buyoptions2: '',
      form3_buyoptions3: '',
      form3_buyoptions4: '',
      form3_buyoptions5: '',
      form3_buyoptions6: '',
      form3_buyoptions7: '',
      form3_buyoptions8: '',
      form3_buyoptions9: '',
      form3_buyoptions10: '',
      form3_buyoptions11: '',
      form3_buyoptions12: '',
      form3_buyoptions13: '',
      form3_buyoptions14: '',
      form3_buyoptions15: '',
      form3_buyoptions16: '',
      form3_buyoptions17: '',
      form3_buyoptions18: '',
      form3_buyoptions19: '',
      form3_buyoptions20: '',
      form3_buyoptions21: '',
      form3_buyoptions22: '',
      form3_buyoptions23: '',
      form3_buyoptions24: '',
      form3_buyoptions25: '',
      form3_buyoptions26: '',
      form3_buyoptions27: '',
      form3_buyoptions28: '',
      form3_buyoptions29: '',
      form3_buyoptions30: '',
      form3_buyoptions31: '',
      form3_buyoptions32: '',
      form3_buyoptions33: '',
      form3_buyoptions34: '',
      form3_buyoptions35: '',
      form3_buyoptions36: '',
      form3_buyoptions37: '',
      form3_buyoptions38: '',
      form3_buyoptions39: '',
      form3_buyoptions40: '',
      form3_buyoptions41: '',
      form3_buyoptions42: '',
      form3_buyoptions43: '',
      form3_buyoptions44: '',
      form3_buyoptions45: '',
      form3_buyoptions46: '',
      form3_buyoptions47: '',
      form3_buyoptions48: '',
      form3_buyoptions49: '',
      form3_buyoptions50: '',
      form3_buyoptions51: '',
      form3_buyoptions52: '',
      form3_buyoptions53: '',
      form3_buyoptions54: '',
      form3_buyoptions55: '',
      form3_buyoptions56: '',
      form3_buyoptions57: '',
      form3_buyoptions58: '',
      form3_buyoptions59: '',
      form3_buyoptions60: '',
      form3_buyoptions61: '',
      form3_buyoptions62: '',
      form3_buyoptions63: '',
      form3_buyoptions64: '',
      form3_buyoptions65: '',
      form3_buyoptions66: '',
      form3_buyoptions67: '',
      form3_buyoptions68: '',
      form3_buyoptions69: '',
      form3_buyoptions70: '',
      form3_buyoptions71: '',
      form3_buyoptions72: '',
      form3_buyoptions73: '',
      form3_buyoptions74: '',
      form3_buyoptions75: '',
      form3_buyoptions76: '',
      form3_buyoptions77: '',
      form3_buyoptions78: '',
      form3_buyoptions79: '',
      form3_buyoptions80: '',
      form3_buyoptions81: '',
      form3_buyoptions82: '',
      form3_buyoptions83: '',
      form3_buyoptions84: '',
      form3_buyoptions85: '',
      form3_buyoptions86: '',
      form3_buyoptions87: '',
      form3_buyoptions88: '',
      form3_buyoptions89: '',
      form3_buyoptions90: '',
      form3_buyoptions91: '',
      form3_buyoptions92: '',
      form3_buyoptions93: '',
      form3_buyoptions94: '',
      form3_buyoptions95: '',
      form3_buyoptions96: '',
      form3_buyoptions97: '',
      form3_buyoptions98: '',
      form3_buyoptions99: '',
      form3_buyoptions100: '',
      form3_buyoptions101: '',
      form3_buyoptions102: '',
      form3_buyoptions103: '',
      form3_buyoptions104: '',
      form3_buyoptions105: '',
      form3_buyoptions106: '',
      form3_buyoptions107: '',
      form3_buyoptions108: '',
      form3_buyoptions109: '',
      form3_buyoptions110: '',
      form3_buyoptions111: '',
      form3_buyoptions112: '',
      form3_buyoptions113: '',
      form3_buyoptions114: '',
      form3_buyoptions115: '',
      form3_buyoptions116: '',
      form3_buyoptions117: '',
      form3_buyoptions118: '',
      form3_buyoptions119: '',
      form3_buyoptions120: '',
      form3_buyoptions121: '',
      form3_buyoptions122: '',
      form3_buyoptions123: '',
      form3_buyoptions124: '',
      form3_buyoptions125: '',
      form3_buyoptions126: '',
      form3_buyoptions127: '',
      form3_buyoptions128: '',
      form3_buyoptions129: '',
      form3_buyoptions130: '',
      form3_buyoptions131: '',
      form3_buyoptions132: '',
      form3_buyoptions133: '',
      form3_buyoptions134: '',
      form3_buyoptions135: '',
      form3_buyoptions136: '',
      form3_buyoptions137: '',
      form3_buyoptions138: '',
      form3_buyoptions139: '',
      form3_buyoptions140: '',
      form3_buyoptions141: '',
      form3_buyoptions142: '',
      form3_buyoptions143: '',
      form3_buyoptions144: '',
      form3_buyoptions145: '',
      form3_buyoptions146: '',
      form3_buyoptions147: '',
      form3_buyoptions148: '',
      form3_buyoptions149: '',
      form3_buyoptions150: '',
      form3_buyoptions151: '',
      form3_buyoptions152: '',
      form3_buyoptions153: '',
      form3_buyoptions154: '',
      form3_buyoptions155: '',
      form3_buyoptions156: '',
      form3_buyoptions157: '',
      form3_buyoptions158: '',
      form3_buyoptions159: '',
      form3_buyoptions160: '',
      form3_buyoptions161: '',
      form3_buyoptions162: '',
      form3_buyoptions163: '',
      form3_buyoptions164: '',
      form3_buyoptions165: '',
      form3_buyoptions166: '',
      form3_buyoptions167: '',
      form3_buyoptions168: '',
      form3_buyoptions169: '',
      form3_buyoptions170: '',
      form3_buyoptions171: '',
      form3_buyoptions172: '',
      form3_buyoptions173: '',
      form3_buyoptions174: '',
      form3_buyoptions175: '',
      form3_buyoptions176: '',
      form3_buyoptions177: '',
      form3_buyoptions178: '',
      form3_buyoptions179: '',
      form3_buyoptions180: '',
      form3_buyoptions181: '',
      form3_buyoptions182: '',
      form3_buyoptions183: '',
      form3_buyoptions184: '',
      form3_buyoptions185: '',
      form3_buyoptions186: '',
      form3_buyoptions187: '',
      form3_buyoptions188: '',
      form3_buyoptions189: '',
      form3_buyoptions190: '',
      form3_buyoptions191: '',
      form3_buyoptions192: '',
      form3_buyoptions193: '',
      form3_buyoptions194: '',
      form3_buyoptions195: '',
      form3_buyoptions196: '',
      form3_buyoptions197: '',
      form3_buyoptions198: '',
      form3_buyoptions199: '',
      form3_buyoptions200: '',
      form3_buyoptions201: '',
      form3_buyoptions202: '',
      form3_buyoptions203: '',
      form3_buyoptions204: '',
      form3_buyoptions205: '',
      form3_buyoptions206: '',
      form3_buyoptions207: '',
      form3_buyoptions208: '',
      form3_buyoptions209: '',
      form3_buyoptions210: '',
      form3_buyoptions211: '',
      form3_buyoptions212: '',
      form3_buyoptions213: '',
      form3_buyoptions214: '',
      form3_buyoptions215: '',
      form3_buyoptions216: '',
      form3_buyoptions217: '',
      form3_buyoptions218: '',
      form3_buyoptions219: '',
      form3_buyoptions220: '',
      form3_buyoptions221: '',
      form3_buyoptions222: '',
      form3_buyoptions223: '',
      form3_buyoptions224: '',
      form3_buyoptions225: '',
      form3_buyoptions226: '',
      form3_buyoptions227: '',
      form3_buyoptions228: '',
      form3_buyoptions229: '',
      form3_buyoptions230: '',
      form3_buyoptions231: '',
      form3_buyoptions232: '',
      form3_buyoptions233: '',
      form3_buyoptions234: '',
      form3_buyoptions235: '',
      form3_buyoptions236: '',
      form3_buyoptions237: '',
      form3_buyoptions238: '',
      form3_buyoptions239: '',
      form3_buyoptions240: '',
      form3_buyoptions241: '',
      form3_buyoptions242: '',
      form3_buyoptions243: '',
      form3_buyoptions244: '',
      form3_buyoptions245: '',
      form3_buyoptions246: '',
      form3_buyoptions247: '',
      form3_buyoptions248: '',
      form3_buyoptions249: '',
      form3_buyoptions250: '',
      form3_buyoptions251: '',
      form3_buyoptions252: '',
      form3_buyoptions253: '',
      form3_buyoptions254: '',
      form3_buyoptions255: '',
      form3_buyoptions256: '',
      form3_buyoptions257: '',
      form3_buyoptions258: '',
      form3_buyoptions259: '',
      form3_buyoptions260: '',
      form3_buyoptions261: '',
      form3_buyoptions262: '',
      form3_buyoptions263: '',
      form3_buyoptions264: '',
      form3_buyoptions265: '',
      form3_buyoptions266: '',
      form3_buyoptions267: '',
      form3_buyoptions268: '',
      form3_buyoptions269: '',
      form3_buyoptions270: '',
      form3_buyoptions271: '',
      form3_buyoptions272: '',
      form3_buyoptions273: '',
      form3_buyoptions274: '',
      form3_buyoptions275: '',
      form3_buyoptions276: '',
      form3_buyoptions277: '',
      form3_buyoptions278: '',
      form3_buyoptions279: '',
      form3_buyoptions280: '',
      form3_buyoptions281: '',
      form3_buyoptions282: '',
      form3_buyoptions283: '',
      form3_buyoptions284: '',
      form3_buyoptions285: '',
      form3_buyoptions286: '',
      form3_buyoptions287: '',
      form3_buyoptions288: '',
      form3_buyoptions289: '',
      form3_buyoptions290: '',
      form3_buyoptions291: '',
      form3_buyoptions292: '',
      form3_buyoptions293: '',
      form3_buyoptions294: '',
      form3_buyoptions295: '',
      form3_buyoptions296: '',
      form3_buyoptions297: '',
      form3_buyoptions298: '',
      form3_buyoptions299: '',
      form3_buyoptions100: '',
      

      form3_city: '',
      form3_state: '',
      form3_completed: false
  })
}
onSubmit4(e) {
  //e.preventDefault();

  console.log(`Form4 submitted:`);
  console.log(`Form4 Name: ${this.state.form4_name}`);
  console.log(`Form4 Phone no: ${this.state.form4_phoneno}`);
  console.log(`Form4 Service States: ${this.state.form4_serviceStates1}`);
  console.log(`Form4 Service States: ${this.state.form4_serviceStates2}`);
  console.log(`Form4 Service States: ${this.state.form4_serviceStates3}`);
  console.log(`Form4 Service States: ${this.state.form4_serviceStates4}`);
  console.log(`Form4 Transport Company: ${this.state.form4_transportationCompany}`);
  console.log(`Form4 City: ${this.state.form4_city}`);
  console.log(`Form4 State: ${this.state.form4_state}`);
  console.log(`Form4 Completed: ${this.state.form4_completed}`);

  const newForm4 = {
      form4_name: this.state.form4_name,
      form4_phoneno: this.state.form4_phoneno,
      form4_serviceStates1: this.state.form4_serviceStates1,
      form4_serviceStates2: this.state.form4_serviceStates2,
      form4_serviceStates3: this.state.form4_serviceStates3,
      form4_serviceStates4: this.state.form4_serviceStates4,
      form4_serviceStates5: this.state.form4_serviceStates5,
      form4_serviceStates6: this.state.form4_serviceStates6,
      form4_serviceStates7: this.state.form4_serviceStates7,
      form4_serviceStates8: this.state.form4_serviceStates8,
      form4_serviceStates9: this.state.form4_serviceStates9,
      form4_serviceStates10: this.state.form4_serviceStates10,
      form4_serviceStates11: this.state.form4_serviceStates11,
      form4_serviceStates12: this.state.form4_serviceStates12,
      form4_serviceStates13: this.state.form4_serviceStates13,
      form4_serviceStates14: this.state.form4_serviceStates14,
      form4_serviceStates15: this.state.form4_serviceStates15,
      form4_serviceStates16: this.state.form4_serviceStates16,
      form4_serviceStates17: this.state.form4_serviceStates17,
      form4_serviceStates18: this.state.form4_serviceStates18,
      form4_serviceStates19: this.state.form4_serviceStates19,
      form4_serviceStates20: this.state.form4_serviceStates20,
      form4_serviceStates21: this.state.form4_serviceStates21,
      form4_serviceStates22: this.state.form4_serviceStates22,
      form4_serviceStates23: this.state.form4_serviceStates23,
      form4_serviceStates24: this.state.form4_serviceStates24,
      form4_serviceStates25: this.state.form4_serviceStates25,
      form4_serviceStates26: this.state.form4_serviceStates26,
      form4_serviceStates27: this.state.form4_serviceStates27,
      form4_serviceStates28: this.state.form4_serviceStates28,
      form4_serviceStates29: this.state.form4_serviceStates29,
      form4_serviceStates30: this.state.form4_serviceStates30,
      form4_serviceStates31: this.state.form4_serviceStates31,
      form4_serviceStates32: this.state.form4_serviceStates32,
      form4_serviceStates33: this.state.form4_serviceStates33,
      form4_serviceStates34: this.state.form4_serviceStates34,
      form4_serviceStates35: this.state.form4_serviceStates35,
      
      
      form4_transportationCompany: this.state.form4_transportationCompany,
      form4_city: this.state.form4_city,
      form4_state: this.state.form4_state,
      form4_completed: this.state.form4_completed
  }

  axios.post('https://backendagrofam.herokuapp.com/form4/add4', newForm4)
      .then(res => console.log(res.data));

  this.setState({
      form4_name: '',
      form4_phoneno: '',
      form4_serviceStates1: '',
      form4_serviceStates2: '',
      form4_serviceStates3: '',
      form4_serviceStates4: '',
      form4_serviceStates5: '',
      form4_serviceStates6: '',
      form4_serviceStates7: '',
      form4_serviceStates8: '',
      form4_serviceStates9: '',
      form4_serviceStates10: '',
      form4_serviceStates11: '',
      form4_serviceStates12: '',
      form4_serviceStates13: '',
      form4_serviceStates14: '',
      form4_serviceStates15: '',
      form4_serviceStates16: '',
      form4_serviceStates17: '',
      form4_serviceStates18: '',
      form4_serviceStates19: '',
      form4_serviceStates20: '',
      form4_serviceStates21: '',
      form4_serviceStates22: '',
      form4_serviceStates23: '',
      form4_serviceStates24: '',
      form4_serviceStates25: '',
      form4_serviceStates26: '',
      form4_serviceStates27: '',
      form4_serviceStates28: '',
      form4_serviceStates29: '',
      form4_serviceStates30: '',
      form4_serviceStates31: '',
      form4_serviceStates32: '',
      form4_serviceStates33: '',
      form4_serviceStates34: '',
      form4_serviceStates35: '',
      
      
      
      form4_transportationCompany: '',
      form4_city: '',
      form4_state: '',
      form4_completed: false
  })
}
    render() {
      return (
        <div className="loginSignupDiv" style={{ paddingTop: "7rem" }}>
          <div className="background">
            <div className="innerLogin">
              <h1>I am a....</h1>
              <div className="LoginCardContainer">
                <div
                  className="LogCard1"
                  style={{ marginRight: "3px" }}
                  onClick={this.handleClick1}
                >
                  <p className="LogCardHead">Farmer</p>
                  <p className="LogCardPara">
                    I am intrested in sourcing produce my business
                  </p>
                </div>
                <div
                  className="LogCard2"
                  style={{ marginRight: "3px" }}
                  onClick={this.handleClick2}
                >
                  <p className="LogCardHead">FPO</p>
                  <p className="LogCardPara">
                    (farmer producers organization) I am interested in producing the
                    goods
                  </p>
                </div>
                <div
                  className="LogCard3"
                  style={{ marginRight: "3px" }}
                  onClick={this.handleClick3}
                >
                  <p className="LogCardHead">Buyer</p>
                  <p className="LogCardPara">
                    I'm intrested in Purchasing the goods
                  </p>
                </div>
                <div
                  className="LogCard4"
                  style={{ marginRight: "3px" }}
                  onClick={this.handleClick4}
                >
                  <p className="LogCardHead">Transporter</p>
                  <p className="LogCardPara">
                    I'm intrested in providing transportation service
                  </p>
                </div>
              </div>
            </div>
            < form onSubmit={this.onSubmit2}> 
            <div className="inputContainer1">
              {/* <h1>Form1</h1> */}
              <div className="FormDiv">
                <div className="FormDiv2">
                  <h2>
                    Please share some info about your farm
                    <br />
                    ??????????????? ???????????? ????????? ?????? ???????????? ????????? ????????? ????????????????????? ???????????? ????????????
                  </h2>
                  <div className="FormDiv4">
                    <h5>
                      My total growing acres
                      <br />
                      ???????????? ????????? ??????????????? ????????????
                    </h5>
                    <p>
                      (Across all commodities)
                      <br />
                      (????????? ????????????????????? ?????? ?????????)
                    </p>
                    <div>
                    <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priority"
                                    value="Less than 100"
                                    checked={this.state.form1_acres==='Less than 100'}
                                    onChange={this.onChangeacres}
                                    />
                  <label className="form-check-label">Less than 100</label>
                  <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priority"
                                    value="100 - 1,000"
                                    checked={this.state.form1_acres==='100 - 1,000'}
                                    onChange={this.onChangeacres}
                                    />
                  <label className="form-check-label">100 - 1,000</label>
                  <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priority"
                                    value="1,000 - 10,000"
                                    checked={this.state.form1_acres==='1,000 - 10,000'}
                                    onChange={this.onChangeacres}
                                    />
                  <label className="form-check-label">1,000 - 10,000</label>
                  <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priority"
                                    value="10,000+"
                                    checked={this.state.form1_acres==='10,000+'}
                                    onChange={this.onChangeacres}
                                    />
                  <label className="form-check-label">10,000+</label>
                      
                      
                    </div>
                  </div>
                  <div className="FormDiv5">
                    <h5>
                      Do you have a 3rd party food safety audit?
                      <br />
                      ???????????? ???????????? ????????? ??????????????? ???????????? ??????????????? ????????????????????? ???????????? ???????
                    </h5>
                    <p>(Such as GAP or GFSI)</p>
                    <div>
                    <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions1"
                                    id="priorityM"
                                    value="Yes"
                                    checked={this.state.form1_audit==='Yes'}
                                    onChange={this.onChangeaudit}
                                    />
                  <label className="form-check-label">Yes</label>
                  <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions1"
                                    id="priorityM"
                                    value="No"
                                    checked={this.state.form1_audit==='No'}
                                    onChange={this.onChangeaudit}
                                    />
                  <label className="form-check-label" >No</label>
                  
                    </div>
                  </div>
                  <div className="FormDiv6">
                    <h5>
                      Commodities I Grow
                      <br />
                      ????????? ????????????????????? ?????? ????????? ???????????? ???????????? ?????????
                    </h5>
                    <p>
                      Help our buyers know what you offer. You can change this later
                      in your profile
                    </p>
                    <h5>Beverages</h5>
                    <div>
                      <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cocoa(????????????)' checked={this.state.form1_commodities1==='Cocoa(????????????)'}
                                    onChange={this.onChangecommodities1}/>
                                Cocoa(????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Coffee(???????????????)' checked={this.state.form1_commodities2==='Coffee(???????????????)'}
                                    onChange={this.onChangecommodities2}  />
                                Coffee(???????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-14rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tea(?????????)' checked={this.state.form1_commodities3==='Tea(?????????)'}
                                    onChange={this.onChangecommodities3}/>
                                Tea(?????????)
                              </div>
                            </label>
                            
                          </div>
                        </div>
                      </form>
                    </div>
                    <div>
                    <h5>Cereals</h5>  
                      <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
                          
                          <div id="checkBoxes2">
                            <label for="first1">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-6rem",
                                }}
                              >
                                <input type="checkbox" id="second" value='Amphophalus(??????????????????????????????)' checked={this.state.form1_commodities4==='Amphophalus(??????????????????????????????)'}
                                    onChange={this.onChangecommodities4}/>
                                 Amphophalus(??????????????????????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.8rem",
                                }}
                              >
                                <input type="checkbox" id="second" value='Rice(????????????)' checked={this.state.form1_commodities5==='Rice(????????????)'}
                                    onChange={this.onChangecommodities5}  />
                                Rice(????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="third" value='Bajra(???????????????)' checked={this.state.form1_commodities6==='Bajra(???????????????)'}
                                    onChange={this.onChangecommodities6}/>
                                Bajra(???????????????)
                              </div>
                            </label>
                            <label for="fourth">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="second" value='Jowar(???????????????)' checked={this.state.form1_commodities7==='Jowar(???????????????)'}
                                    onChange={this.onChangecommodities7} />
                                Jowar(???????????????)         
                              </div>
                            </label>
                            <label for="fifth">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-13.1rem",
                                }}
                              >
                                <input type="checkbox" id="second" value='Barley(??????)' checked={this.state.form1_commodities8==='Barley(??????)'}
                                    onChange={this.onChangecommodities8}/>
                                Barley(??????) 
                              </div>
                            </label>
                            <label for="sixth">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10rem",
                                }}
                              >
                                <input type="checkbox" id="second" value='Beaten Rice(???????????? ????????????)' checked={this.state.form1_commodities9==='Beaten Rice(???????????? ????????????)'}
                                    onChange={this.onChangecommodities9}/>
                                Beaten Rice(???????????? ????????????)
                              </div>
                            </label>
                            <label for="seven">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Foxtail Millet(???????????????????????? ???????????????)' checked={this.state.form1_commodities10==='Foxtail Millet(???????????????????????? ???????????????)'}
                                    onChange={this.onChangecommodities10}/>
                                Foxtail Millet(???????????????????????? ???????????????)
                              </div>
                            </label>
                            <label for="eight">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Hybrid Cumbu(???????????????????????? ????????????)' checked={this.state.form1_commodities11==='Hybrid Cumbu(???????????????????????? ????????????)'}
                                    onChange={this.onChangecommodities11}/>
                                Hybrid Cumbu(???????????????????????? ????????????)
                              </div>
                            </label>
                            <label for="nine">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Kodo Millet(???????????? ???????????????)' checked={this.state.form1_commodities12==='Kodo Millet(???????????? ???????????????)'}
                                    onChange={this.onChangecommodities12}/>
                                Kodo Millet(???????????? ???????????????)
                              </div>

                            </label>
                            <label for="ten">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Maize(???????????????)' checked={this.state.form1_commodities13==='Maize(???????????????)'}
                                    onChange={this.onChangecommodities13}/>
                                Maize(???????????????)
                              </div>
                            </label>
                            <label for="eleven">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Paddy(????????? ?????? ?????????)' checked={this.state.form1_commodities14==='Paddy(????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities14}/>
                                Paddy(????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="twelve">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Paddy(????????? ?????? ?????????)' checked={this.state.form1_commodities15==='Paddy(????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities15}/>
                                Paddy(????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="thirteen">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-13rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ragi(????????????)' checked={this.state.form1_commodities16==='Ragi(????????????)'}
                                    onChange={this.onChangecommodities16}/>
                                 Ragi(????????????) 
                              </div>
                            </label>
                            <label for="fourteen">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sajje(???????????????)' checked={this.state.form1_commodities17==='Sajje(???????????????)'}
                                    onChange={this.onChangecommodities17}/>
                                 Sajje(???????????????)
                              </div>
                            </label>
                            <label for="fifteen">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-13rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Savi(????????????)' checked={this.state.form1_commodities18==='Savi(????????????)'}
                                    onChange={this.onChangecommodities18}/>
                                Savi(????????????)
                              </div>
                            </label>
                            <label for="sixteen">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-13rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Soji(????????????)' checked={this.state.form1_commodities19==='Soji(????????????)'}
                                    onChange={this.onChangecommodities19}/>
                                Soji(????????????)
                              </div>
                            </label>
                            <label for="seventeen">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value=' T.V. Cumbu(??????.??????)' checked={this.state.form1_commodities20==='T.V. Cumbu(??????.??????)'}
                                    onChange={this.onChangecommodities20}/>
                                 T.V. Cumbu(??????.??????)
                              </div>
                            </label>
                            <label for="eighteen">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Wheat(???????????????)' checked={this.state.form1_commodities21==='Wheat(???????????????)'}
                                    onChange={this.onChangecommodities21}/>
                                Wheat(???????????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      
                    </div>
                  </div>
                  <h5>Drug and Narcotics</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Arecanut(??????????????????)' checked={this.state.form1_commodities22==='Arecanut(??????????????????)'}
                                    onChange={this.onChangecommodities22}/>
                                Arecanut(??????????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Betal Leaves(????????? ?????? ???????????????)' checked={this.state.form1_commodities23==='Betal Leaves(????????? ?????? ???????????????)'}
                                    onChange={this.onChangecommodities23}  />
                                Betal Leaves(????????? ?????? ???????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Isabgul(?????????????????????)' checked={this.state.form1_commodities24==='Isabgul(?????????????????????)'}
                                    onChange={this.onChangecommodities24}/>
                                Isabgul(?????????????????????) 
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mahua(????????????)' checked={this.state.form1_commodities25==='Mahua(????????????)'}
                                    onChange={this.onChangecommodities25}/>
                                Mahua(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Harad(???????????????)' checked={this.state.form1_commodities26==='Harad(???????????????)'}
                                    onChange={this.onChangecommodities26}/>
                                Harad(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tobacco(??????????????????)' checked={this.state.form1_commodities27==='Tobacco(??????????????????)'}
                                    onChange={this.onChangecommodities27}/>
                                Tobacco(??????????????????)
                              </div>
                            </label>
                            
                          </div>
                        </div>
                      </form>
                      <h5>Dry Fruits</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Almond(???????????????)' checked={this.state.form1_commodities28==='Almond(???????????????)'}
                                    onChange={this.onChangecommodities28}/>
                                Almond(???????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cashewnuts(????????????)' checked={this.state.form1_commodities29==='Cashewnuts(????????????)'}
                                    onChange={this.onChangecommodities29}  />
                                Cashewnuts(????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.2rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Dry Grapes(???????????? ???????????????)' checked={this.state.form1_commodities30==='Dry Grapes(???????????? ???????????????)'}
                                    onChange={this.onChangecommodities30}/>
                                Dry Grapes(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Walnut(???????????????)' checked={this.state.form1_commodities31==='Walnut(???????????????)'}
                                    onChange={this.onChangecommodities31}/>
                                Walnut(???????????????)
                              </div>
                            </label>
                            
                          </div>
                        </div>
                      </form>
                      <h5>Fibre Crops</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cotton(????????????)' checked={this.state.form1_commodities32==='Cotton(????????????)'}
                                    onChange={this.onChangecommodities32}/>
                                Cotton(????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Jute(?????????)' checked={this.state.form1_commodities33==='Jute(?????????)'}
                                    onChange={this.onChangecommodities33}  />
                                Jute(?????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lint(???????????????)' checked={this.state.form1_commodities34==='Lint(???????????????)'}
                                    onChange={this.onChangecommodities34}/>
                                Lint(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sunhemp(?????????????????????)' checked={this.state.form1_commodities35==='Sunhemp(?????????????????????)'}
                                    onChange={this.onChangecommodities35}/>
                                Sunhemp(?????????????????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Flowers</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Anthorium(????????????????????????)' checked={this.state.form1_commodities36==='Anthorium(????????????????????????)'}
                                    onChange={this.onChangecommodities36}/>
                                 Anthorium(????????????????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Astera(?????????????????????)' checked={this.state.form1_commodities37==='Astera(?????????????????????)'}
                                    onChange={this.onChangecommodities37}  />
                                Astera(?????????????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='BOP(?????????????????? ?????? ?????????????????????)' checked={this.state.form1_commodities38==='BOP(?????????????????? ?????? ?????????????????????)'}
                                    onChange={this.onChangecommodities38}/>
                                BOP(?????????????????? ?????? ?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Carnation(???????????? ????????? ?????????)' checked={this.state.form1_commodities39==='Carnation(???????????? ????????? ?????????)'}
                                    onChange={this.onChangecommodities39}/>
                                Carnation(???????????? ????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chrysanthemum(????????????????????????)' checked={this.state.form1_commodities40==='Chrysanthemum(????????????????????????)'}
                                    onChange={this.onChangecommodities40}/>
                                Chrysanthemum(????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chrysanthemum(????????????????????????)(Loose)' checked={this.state.form1_commodities41==='Chrysanthemum(????????????????????????)(Loose)'}
                                    onChange={this.onChangecommodities41}/>
                                Chrysanthemum(????????????????????????)(Loose)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Daila(???????????????)' checked={this.state.form1_commodities42==='Daila(???????????????)'}
                                    onChange={this.onChangecommodities42}/>
                                Daila(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Delha(??????????????????)' checked={this.state.form1_commodities43==='Delha(??????????????????)'}
                                    onChange={this.onChangecommodities43}/>
                                Delha(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Gladiolus Bulb(?????????????????????????????? ????????????)' checked={this.state.form1_commodities44==='Gladiolus Bulb(?????????????????????????????? ????????????)'}
                                    onChange={this.onChangecommodities44}/>
                                Gladiolus Bulb(?????????????????????????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-6rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Gladiolus Cut Flower(?????????????????????????????? ?????? ??????????????????)' checked={this.state.form1_commodities45==='Gladiolus Cut Flower(?????????????????????????????? ?????? ??????????????????)'}
                                    onChange={this.onChangecommodities45}/>
                                Gladiolus Cut Flower(?????????????????????????????? ?????? ??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Jaffri(???????????????)' checked={this.state.form1_commodities46==='Jaffri(???????????????)'}
                                    onChange={this.onChangecommodities46}/>
                                Jaffri(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Jarbara(????????????)' checked={this.state.form1_commodities47==='Jarbara(????????????)'}
                                    onChange={this.onChangecommodities47}/>
                                Jarbara(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.7rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Jasmine(???????????????)' checked={this.state.form1_commodities48==='Jasmine(???????????????)'}
                                    onChange={this.onChangecommodities48}/>
                                Jasmine(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Kakada(????????????)' checked={this.state.form1_commodities49==='Kakada(????????????)'}
                                    onChange={this.onChangecommodities49}/>
                                Kakada(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Kankambra(???????????????????????????)' checked={this.state.form1_commodities50==='Kankambra(???????????????????????????)'}
                                    onChange={this.onChangecommodities50}/>
                                Kankambra(???????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lilly(????????????)' checked={this.state.form1_commodities51==='Lilly(????????????)'}
                                    onChange={this.onChangecommodities51}/>
                                Lilly(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lotus(????????? ?????????)' checked={this.state.form1_commodities52==='Lotus(????????? ?????????)'}
                                    onChange={this.onChangecommodities52}/>
                                Lotus(????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Marget(?????????????????????)' checked={this.state.form1_commodities53==='Marget(?????????????????????)'}
                                    onChange={this.onChangecommodities53}/>
                                Marget(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Marigold(??????????????? ?????? ?????????)' checked={this.state.form1_commodities54==='Marigold(??????????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities54}/>
                                Marigold(??????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Marigold(??????????????? ?????? ?????????)(loose)' checked={this.state.form1_commodities55==='Marigold(??????????????? ?????? ?????????)(loose)'}
                                    onChange={this.onChangecommodities55}/>
                                Marigold(??????????????? ?????? ?????????)(loose)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Orchid(??????????????????)' checked={this.state.form1_commodities56==='Orchid(??????????????????)'}
                                    onChange={this.onChangecommodities56}/>
                                Orchid(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Patti(???????????????) Calcutta' checked={this.state.form1_commodities57==='Patti(???????????????) Calcutta'}
                                    onChange={this.onChangecommodities57}/>
                                Patti(???????????????) Calcutta
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Raibel(???????????????)' checked={this.state.form1_commodities58==='Raibel(???????????????)'}
                                    onChange={this.onChangecommodities58}/>
                                Raibel(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Rose(???????????????)(Local)' checked={this.state.form1_commodities59==='Rose(???????????????)(Local)'}
                                    onChange={this.onChangecommodities59}/>
                                Rose(???????????????)(Local)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Rose(???????????????)(Loose)' checked={this.state.form1_commodities60==='Rose(???????????????)(Loose)'}
                                    onChange={this.onChangecommodities60}/>
                                Rose(???????????????)(Loose))
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Rose(???????????????)(Tata)' checked={this.state.form1_commodities61==='Rose(???????????????)(Tata)'}
                                    onChange={this.onChangecommodities61}/>
                                Rose(???????????????)(Tata)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tube Flower(??????????????? ?????????)' checked={this.state.form1_commodities62==='Tube Flower(??????????????? ?????????)'}
                                    onChange={this.onChangecommodities62}/>
                                Tube Flower(??????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tube Rose(????????????????????????)(Double)' checked={this.state.form1_commodities63==='Tube Rose(????????????????????????)(Double)'}
                                    onChange={this.onChangecommodities63}/>
                                Tube Rose(????????????????????????)(Double)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tube Rose(????????????????????????)(Loose)' checked={this.state.form1_commodities64==='Tube Rose(????????????????????????)(Loose)'}
                                    onChange={this.onChangecommodities64}/>
                                Tube Rose(????????????????????????)(Loose)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tube Rose(????????????????????????)(Single)' checked={this.state.form1_commodities65==='Tube Rose(????????????????????????)(Single)'}
                                    onChange={this.onChangecommodities65}/>
                                Tube Rose(????????????????????????)(Single)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Forest Products</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ambada Seed(?????????????????? ?????????)' checked={this.state.form1_commodities66==='Ambada Seed(?????????????????? ?????????)'}
                                    onChange={this.onChangecommodities66}/>
                                Ambada Seed(?????????????????? ?????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Antawala(????????????????????????)' checked={this.state.form1_commodities67==='Antawala(????????????????????????)'}
                                    onChange={this.onChangecommodities67}  />
                                Antawala(????????????????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bamboo(????????????)' checked={this.state.form1_commodities68==='Bamboo(????????????)'}
                                    onChange={this.onChangecommodities68}/>
                                Bamboo(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bay leaf (????????????????????????)' checked={this.state.form1_commodities69==='Bay leaf (????????????????????????)'}
                                    onChange={this.onChangecommodities69}/>
                                Bay leaf (????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Broomstick(??????????????? ?????? ????????????)' checked={this.state.form1_commodities70==='Broomstick(??????????????? ?????? ????????????)'}
                                    onChange={this.onChangecommodities70}/>
                                Broomstick(??????????????? ?????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cane(????????????)' checked={this.state.form1_commodities71==='Cane(????????????)'}
                                    onChange={this.onChangecommodities71}/>
                                Cane(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Firewood(???????????????)' checked={this.state.form1_commodities72==='Firewood(???????????????)'}
                                    onChange={this.onChangecommodities72}/>
                                Firewood(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Flower Broom(????????? ???????????????)' checked={this.state.form1_commodities73==='Flower Broom(????????? ???????????????)'}
                                    onChange={this.onChangecommodities73}/>
                                Flower Broom(????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Hippe Seed(?????????????????? ?????????)' checked={this.state.form1_commodities74==='Hippe Seed(?????????????????? ?????????)'}
                                    onChange={this.onChangecommodities74}/>
                                Hippe Seed(?????????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Jute Seed(????????? ?????????)' checked={this.state.form1_commodities75==='Jute Seed(????????? ?????????)'}
                                    onChange={this.onChangecommodities75}/>
                                Jute Seed(????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mahua Seed(Hippe seed)' checked={this.state.form1_commodities76==='Mahua Seed(Hippe seed)'}
                                    onChange={this.onChangecommodities76}/>
                                Mahua Seed(Hippe seed)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Neem Seed(????????? ?????????)' checked={this.state.form1_commodities77==='Neem Seed(????????? ?????????)'}
                                    onChange={this.onChangecommodities77}/>
                                Neem Seed(????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pundi Seed(??????????????? ?????????)' checked={this.state.form1_commodities78==='Pundi Seed(??????????????? ?????????)'}
                                    onChange={this.onChangecommodities78}/>
                                Pundi Seed(??????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Resinwood(??????????????????)' checked={this.state.form1_commodities79==='Resinwood(??????????????????)'}
                                    onChange={this.onChangecommodities79}/>
                                Resinwood(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Soapnut(????????????)' checked={this.state.form1_commodities80==='Soapnut(????????????)'}
                                    onChange={this.onChangecommodities80}/>
                                Soapnut(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tamarind Fruit(???????????? ?????? ??????)' checked={this.state.form1_commodities81==='Tamarind Fruit(???????????? ?????? ??????)'}
                                    onChange={this.onChangecommodities81}/>
                                Tamarind Fruit(???????????? ?????? ??????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tamarind Seed(???????????? ?????? ?????????)' checked={this.state.form1_commodities82==='Tamarind Seed(???????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities82}/>
                                Tamarind Seed(???????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tamarind Seed(???????????? ?????? ?????????)' checked={this.state.form1_commodities83==='Tamarind Seed(???????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities83}/>
                                Tamarind Seed(???????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Wood(???????????????)' checked={this.state.form1_commodities84==='Wood(???????????????)'}
                                    onChange={this.onChangecommodities84}/>
                                Wood(???????????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Fruits</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Amla(????????????)' checked={this.state.form1_commodities85==='Amla(????????????)'}
                                    onChange={this.onChangecommodities85}/>
                                Amla(????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Apple(?????????)' checked={this.state.form1_commodities86==='Apple(?????????)'}
                                    onChange={this.onChangecommodities86}  />
                                Apple(?????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Apricot(??????????????????)' checked={this.state.form1_commodities87==='Apricot(??????????????????)'}
                                    onChange={this.onChangecommodities87}/>
                                Apricot(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Banana(????????????)' checked={this.state.form1_commodities88==='Banana(????????????)'}
                                    onChange={this.onChangecommodities88}/>
                                Banana(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ber(?????????)' checked={this.state.form1_commodities89==='Ber(?????????)'}
                                    onChange={this.onChangecommodities89}/>
                                Ber(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Borehannu(?????????????????????)' checked={this.state.form1_commodities90==='Borehannu(?????????????????????)'}
                                    onChange={this.onChangecommodities90}/>
                                Borehannu(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chakotha(???????????????)' checked={this.state.form1_commodities91==='Chakotha(???????????????)'}
                                    onChange={this.onChangecommodities91}/>
                                Chakotha(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cherry(????????????)' checked={this.state.form1_commodities92==='Cherry(????????????)'}
                                    onChange={this.onChangecommodities92}/>
                                Cherry(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chikoos(????????????)' checked={this.state.form1_commodities93==='Chikoos(????????????)'}
                                    onChange={this.onChangecommodities93}/>
                                Chikoos(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Custard Apple(???????????????)' checked={this.state.form1_commodities94==='Custard Apple(???????????????)'}
                                    onChange={this.onChangecommodities94}/>
                                Custard Apple(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Grapes(???????????????)' checked={this.state.form1_commodities95==='Grapes(???????????????)'}
                                    onChange={this.onChangecommodities95}/>
                                Grapes(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Guava(???????????????)' checked={this.state.form1_commodities96==='Guava(???????????????)'}
                                    onChange={this.onChangecommodities96}/>
                                Guava(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Jack Fruit(????????????)' checked={this.state.form1_commodities97==='Jack Fruit(????????????)'}
                                    onChange={this.onChangecommodities97}/>
                                Jack Fruit(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Blackberry(???????????????)' checked={this.state.form1_commodities98==='Blackberry(???????????????)'}
                                    onChange={this.onChangecommodities98}/>
                                Blackberry(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Musk Melon(??????????????????)' checked={this.state.form1_commodities99==='Musk Melon(??????????????????)'}
                                    onChange={this.onChangecommodities99}/>
                                Musk Melon(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Kinnow(??????????????????)' checked={this.state.form1_commodities100==='Kinnow(??????????????????)'}
                                    onChange={this.onChangecommodities100}/>
                                Kinnow(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lime(????????????????????? ???????????????)' checked={this.state.form1_commodities101==='Lime(????????????????????? ???????????????)'}
                                    onChange={this.onChangecommodities101}/>
                                Lime(????????????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Litchi(????????????)' checked={this.state.form1_commodities102==='Litchi(????????????)'}
                                    onChange={this.onChangecommodities102}/>
                                Litchi(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lukad(??????????????????)' checked={this.state.form1_commodities103==='Lukad(??????????????????)'}
                                    onChange={this.onChangecommodities103}/>
                                Lukad(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mango(??????)' checked={this.state.form1_commodities104==='Mango(??????)'}
                                    onChange={this.onChangecommodities104}/>
                                Mango(??????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Marasebu(????????????????????????)' checked={this.state.form1_commodities105==='Marasebu(????????????????????????)'}
                                    onChange={this.onChangecommodities105}/>
                                Marasebu(????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sweet Lime(???????????? ???????????????)' checked={this.state.form1_commodities106==='Sweet Lime(???????????? ???????????????)'}
                                    onChange={this.onChangecommodities106}/>
                                Sweet Lime(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Nearle Hannu(??????????????? ?????? ?????????)' checked={this.state.form1_commodities107==='Nearle Hannu(??????????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities107}/>
                                Nearle Hannu(??????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Nelli Kai(?????????????????? ?????????)' checked={this.state.form1_commodities108==='Nelli Kai(?????????????????? ?????????)'}
                                    onChange={this.onChangecommodities108}/>
                                Nelli Kai(?????????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Orange(???????????????)' checked={this.state.form1_commodities109==='Orange(???????????????)'}
                                    onChange={this.onChangecommodities109}/>
                                Orange(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Papaya(???????????????)' checked={this.state.form1_commodities110==='Papaya(???????????????)'}
                                    onChange={this.onChangecommodities110}/>
                                Papaya(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Peach(?????????)' checked={this.state.form1_commodities111==='Peach(?????????)'}
                                    onChange={this.onChangecommodities111}/>
                                Peach(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pear(?????????????????????)(Marasebu)' checked={this.state.form1_commodities112==='Pear(?????????????????????)(Marasebu)'}
                                    onChange={this.onChangecommodities112}/>
                                Pear(?????????????????????)(Marasebu)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Persimon(??????????????????)' checked={this.state.form1_commodities113==='Persimon(??????????????????)'}
                                    onChange={this.onChangecommodities113}/>
                                Persimon(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pineapple(?????????????????????)' checked={this.state.form1_commodities114==='Pineapple(?????????????????????)'}
                                    onChange={this.onChangecommodities114}/>
                                Pineapple(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Plum(???????????????????????????)' checked={this.state.form1_commodities115==='Plum(???????????????????????????)'}
                                    onChange={this.onChangecommodities115}/>
                                Plum(???????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pomegranate(????????????)' checked={this.state.form1_commodities116==='Pomegranate(????????????)'}
                                    onChange={this.onChangecommodities116}/>
                                Pomegranate(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Seetapal(?????????????????????)' checked={this.state.form1_commodities117==='Seetapal(?????????????????????)'}
                                    onChange={this.onChangecommodities117}/>
                                Seetapal(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Siddota(????????????????????????)' checked={this.state.form1_commodities118==='Siddota(????????????????????????)'}
                                    onChange={this.onChangecommodities118}/>
                                Siddota(????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tender Coconut(??????????????? ??????????????????)' checked={this.state.form1_commodities119==='Tender Coconut(??????????????? ??????????????????)'}
                                    onChange={this.onChangecommodities119}/>
                                Tender Coconut(??????????????? ??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Water Melon(???????????????)' checked={this.state.form1_commodities120==='Water Melon(???????????????)'}
                                    onChange={this.onChangecommodities120}/>
                                Water Melon(???????????????)
                              </div>
                            </label>
                            
                            
                          </div>
                        </div>
                      </form>
                      <h5>Live Stock,Poultry and Fisheries</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bull(?????????)' checked={this.state.form1_commodities121==='Bull(?????????)'}
                                    onChange={this.onChangecommodities121}/>
                                Bull(?????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Calf(???????????????)' checked={this.state.form1_commodities122==='Calf(???????????????)'}
                                    onChange={this.onChangecommodities122}  />
                                Calf(???????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cock(??????????????????)' checked={this.state.form1_commodities123==='Cock(??????????????????)'}
                                    onChange={this.onChangecommodities123}/>
                                Cock(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cow(?????????)' checked={this.state.form1_commodities124==='Cow'}
                                    onChange={this.onChangecommodities124}/>
                                Cow(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Duck(???????????????)' checked={this.state.form1_commodities125==='Duck(???????????????)'}
                                    onChange={this.onChangecommodities125}/>
                                Duck(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Egg(????????????)' checked={this.state.form1_commodities126==='Egg(????????????)'}
                                    onChange={this.onChangecommodities126}/>
                                Egg(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Fish(????????????)' checked={this.state.form1_commodities127==='Fish(????????????)'}
                                    onChange={this.onChangecommodities127}/>
                                Fish(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Goat(????????????)' checked={this.state.form1_commodities128==='Goat(????????????)'}
                                    onChange={this.onChangecommodities128}/>
                                Goat(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='He Buffalo(?????? ????????????)' checked={this.state.form1_commodities129==='He Buffalo(?????? ????????????)'}
                                    onChange={this.onChangecommodities129}/>
                                He Buffalo(?????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Hen(??????????????????)' checked={this.state.form1_commodities130==='Hen'}
                                    onChange={this.onChangecommodities130}/>
                                Hen(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ox(?????????)' checked={this.state.form1_commodities131==='Ox(?????????)'}
                                    onChange={this.onChangecommodities131}/>
                                Ox(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pigs(????????????)' checked={this.state.form1_commodities132==='Pigs(????????????)'}
                                    onChange={this.onChangecommodities132}/>
                                Pigs(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ram(??????????????? ???????????????)' checked={this.state.form1_commodities133==='Ram(??????????????? ???????????????)'}
                                    onChange={this.onChangecommodities133}/>
                                Ram(??????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='She Buffalo(?????? ????????????)' checked={this.state.form1_commodities134==='She Buffalo(?????? ????????????)'}
                                    onChange={this.onChangecommodities134}/>
                                She Buffalo(?????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='She Goat(?????? ????????????)' checked={this.state.form1_commodities135==='She Goat(?????? ????????????)'}
                                    onChange={this.onChangecommodities135}/>
                                She Goat(?????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sheep(????????????)' checked={this.state.form1_commodities136==='Sheep(????????????)'}
                                    onChange={this.onChangecommodities136}/>
                                Sheep(????????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Oil Seeds</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Castor Seed(??????????????? ?????????)' checked={this.state.form1_commodities137==='Castor Seed(??????????????? ?????????)'}
                                    onChange={this.onChangecommodities137}/>
                                Castor Seed(??????????????? ?????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Coconut Seed(?????????????????? ?????????)' checked={this.state.form1_commodities139==='Coconut Seed(?????????????????? ?????????)'}
                                    onChange={this.onChangecommodities138}  />
                                Coconut Seed(?????????????????? ?????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Copra(???????????????)' checked={this.state.form1_commodities139==='Copra(???????????????)'}
                                    onChange={this.onChangecommodities139}/>
                                Copra(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cotton Seed(???????????? ?????????)' checked={this.state.form1_commodities140==='Cotton Seed(???????????? ?????????)'}
                                    onChange={this.onChangecommodities140}/>
                                Cotton Seed(???????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ground Nut Seed(????????????????????? ?????? ?????????)' checked={this.state.form1_commodities141==='Ground Nut Seed(????????????????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities141}/>
                                Ground Nut Seed(????????????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Groundnut(?????????????????????)' checked={this.state.form1_commodities142==='Groundnut(?????????????????????)'}
                                    onChange={this.onChangecommodities142}/>
                                Groundnut(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Groundnut(?????????????????????) (Split)' checked={this.state.form1_commodities143==='Groundnut(?????????????????????) (Split)'}
                                    onChange={this.onChangecommodities143}/>
                                Groundnut(?????????????????????) (Split)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Gurellu(??????????????????)' checked={this.state.form1_commodities144==='Gurellu(??????????????????)'}
                                    onChange={this.onChangecommodities144}/>
                                Gurellu(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Honge seed(???????????? ?????????)' checked={this.state.form1_commodities145==='Honge seed(???????????? ?????????)'}
                                    onChange={this.onChangecommodities145}/>
                                Honge seed(???????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Linseed(???????????? ?????? ?????????)' checked={this.state.form1_commodities146==='Linseed(???????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities146}/>
                                Linseed(???????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mustard(???????????????)' checked={this.state.form1_commodities147==='Mustard(???????????????)'}
                                    onChange={this.onChangecommodities147}/>
                                Mustard(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Niger Seed(??????????????? ?????????)' checked={this.state.form1_commodities148==='Niger Seed(??????????????? ?????????)'}
                                    onChange={this.onChangecommodities148}/>
                                Niger Seed(??????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Safflower(???????????????)' checked={this.state.form1_commodities149==='Safflower(???????????????)'}
                                    onChange={this.onChangecommodities149}/>
                                Safflower(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sesamum(Sesamum)' checked={this.state.form1_commodities150==='Sesamum(Sesamum)'}
                                    onChange={this.onChangecommodities150}/>
                                Sesamum(Sesamum)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Soyabean(???????????? ?????????)' checked={this.state.form1_commodities151==='Soyabean(???????????? ?????????)'}
                                    onChange={this.onChangecommodities151}/>
                                Soyabean(???????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sunflower(????????????????????????)' checked={this.state.form1_commodities152==='Sunflower(????????????????????????)'}
                                    onChange={this.onChangecommodities152}/>
                                Sunflower(????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sunflower Seed(???????????????????????? ?????? ?????????)' checked={this.state.form1_commodities153==='Sunflower Seed(???????????????????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities153}/>
                                Sunflower Seed(???????????????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Suva(????????????) (Dill Seed)' checked={this.state.form1_commodities154==='Suva(????????????) (Dill Seed)'}
                                    onChange={this.onChangecommodities154}/>
                                Suva(????????????) (Dill Seed)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Taramira(????????????????????????)' checked={this.state.form1_commodities155==='Taramira(????????????????????????)'}
                                    onChange={this.onChangecommodities155}/>
                                Taramira(????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Toria(??????????????????)' checked={this.state.form1_commodities156==='Toria(??????????????????)'}
                                    onChange={this.onChangecommodities156}/>
                                Toria(??????????????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Oils and Fats</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Butter(???????????????)' checked={this.state.form1_commodities157==='Butter(???????????????)'}
                                    onChange={this.onChangecommodities157}/>
                                Butter(???????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Castor Oil(??????????????? ?????? ?????????)' checked={this.state.form1_commodities158==='Castor Oil(??????????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities158}  />
                                Castor Oil(??????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Coconut Oil(?????????????????? ?????? ?????????)' checked={this.state.form1_commodities159==='Coconut Oil(?????????????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities159}/>
                                Coconut Oil(?????????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Dalda(???????????????)' checked={this.state.form1_commodities160==='Dalda(???????????????)'}
                                    onChange={this.onChangecommodities160}/>
                                Dalda(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ghee(??????)' checked={this.state.form1_commodities161==='Ghee(??????)'}
                                    onChange={this.onChangecommodities161}/>
                                Ghee(??????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Gingelly Oil(????????????????????? ?????????)' checked={this.state.form1_commodities162==='Gingelly Oil(????????????????????? ?????????)'}
                                    onChange={this.onChangecommodities162}/>
                                Gingelly Oil(????????????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-6.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ground Nut Oil(????????????????????? ?????? ?????????)' checked={this.state.form1_commodities163==='Ground Nut Oil(????????????????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities163}/>
                                Ground Nut Oil(????????????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mustard Oil(??????????????? ?????????)'checked={this.state.form1_commodities164==='Mustard Oil(??????????????? ?????????)'}
                                    onChange={this.onChangecommodities164}/>
                                Mustard Oil(??????????????? ?????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Pulses</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Alasande Gram(???????????????????????? ???????????????)' checked={this.state.form1_commodities165==='Alasande Gram(???????????????????????? ???????????????)'}
                                    onChange={this.onChangecommodities165}/>
                                Alasande Gram(???????????????????????? ???????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Arhar (????????????)(Whole)' checked={this.state.form1_commodities166==='Arhar (????????????)(Whole)'}
                                    onChange={this.onChangecommodities166}  />
                                Arhar (????????????)(Whole)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Arhar Dal(???????????? ????????????)(Tur Dal)' checked={this.state.form1_commodities167==='Arhar Dal(???????????? ????????????)(Tur Dal)'}
                                    onChange={this.onChangecommodities167}/>
                                Arhar Dal(???????????? ????????????)(Tur Dal)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Avare Dal(??????????????? ????????????)' checked={this.state.form1_commodities168==='Avare Dal(??????????????? ????????????)'}
                                    onChange={this.onChangecommodities168}/>
                                Avare Dal(??????????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Beans(??????????????????)' checked={this.state.form1_commodities169==='Beans(??????????????????)'}
                                    onChange={this.onChangecommodities169}/>
                                Beans(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bengal Gram Dal (????????? ?????????)' checked={this.state.form1_commodities170==='Bengal Gram Dal (????????? ?????????)'}
                                    onChange={this.onChangecommodities170}/>
                                Bengal Gram Dal (????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-6.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bengal Gram(????????? ?????????)(Gram)(Whole)' checked={this.state.form1_commodities171==='Bengal Gram(????????? ?????????)(Gram)(Whole)'}
                                    onChange={this.onChangecommodities171}/>
                                Bengal Gram(????????? ?????????)(Gram)(Whole)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Big Gram(???????????? ???????????????)' checked={this.state.form1_commodities172==='Big Gram(???????????? ???????????????)'}
                                    onChange={this.onChangecommodities172}/>
                                Big Gram(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-6.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Black Gram(???????????? ?????????) (Urd Beans)(Whole)' checked={this.state.form1_commodities173==='Black Gram(???????????? ?????????) (Urd Beans)(Whole)'}
                                    onChange={this.onChangecommodities173}/>
                                Black Gram(???????????? ?????????) (Urd Beans)(Whole)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-6.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Black Gram Dal(???????????? ????????? ?????????) (Urd Dal)' checked={this.state.form1_commodities174==='Black Gram Dal(???????????? ????????? ?????????) (Urd Dal)'}
                                    onChange={this.onChangecommodities174}/>
                                Black Gram Dal(???????????? ????????? ?????????) (Urd Dal)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bullar(??????????????????)' checked={this.state.form1_commodities175==='Bullar(??????????????????)'}
                                    onChange={this.onChangecommodities175}/>
                                Bullar(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chennangi(???????????????????????????) (Whole)' checked={this.state.form1_commodities176==='Chennangi(???????????????????????????) (Whole)'}
                                    onChange={this.onChangecommodities176}/>
                                Chennangi(???????????????????????????) (Whole)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chennangi Dal(??????????????????????????? ????????????)' checked={this.state.form1_commodities177==='Chennangi Dal(??????????????????????????? ????????????)'}
                                    onChange={this.onChangecommodities177}/>
                                Chennangi Dal(??????????????????????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cowpea (??????????????????)' checked={this.state.form1_commodities178==='Cowpea (??????????????????)'}
                                    onChange={this.onChangecommodities178}/>
                                Cowpea (??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Dal (??????)' checked={this.state.form1_commodities179==='Dal (??????)'}
                                    onChange={this.onChangecommodities179}/>
                                Dal (??????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Green Gram (????????????)(Whole)' checked={this.state.form1_commodities180==='Green Gram (????????????)(Whole)'}
                                    onChange={this.onChangecommodities180}/>
                                Green Gram (????????????)(Whole)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-6.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Green Gram Dal(???????????? ?????????) (Moong Dal)' checked={this.state.form1_commodities181==='Green Gram Dal(???????????? ?????????) (Moong Dal)'}
                                    onChange={this.onChangecommodities181}/>
                                Green Gram Dal(???????????? ?????????) (Moong Dal)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Green Peas(????????? ?????????)' checked={this.state.form1_commodities182==='Green Peas(????????? ?????????)'}
                                    onChange={this.onChangecommodities182}/>
                                Green Peas(????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chickpeas(?????????)' checked={this.state.form1_commodities183==='Chickpeas(?????????)'}
                                    onChange={this.onChangecommodities183}/>
                                Chickpeas(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Karamani(??????????????????)' checked={this.state.form1_commodities184==='Karamani(??????????????????)'}
                                    onChange={this.onChangecommodities184}/>
                                Karamani(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Horse Gram(????????? ?????? ?????????)' checked={this.state.form1_commodities185==='Horse Gram(????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities185}/>
                                Horse Gram(????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lak(?????????)(Teora)' checked={this.state.form1_commodities186==='Lak(?????????)(Teora)'}
                                    onChange={this.onChangecommodities186}/>
                                Lak(?????????)(Teora)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lentil (????????????)(Whole)' checked={this.state.form1_commodities187==='Lentil (????????????)(Whole)'}
                                    onChange={this.onChangecommodities187}/>
                                Lentil (????????????)(Whole)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Masur Dal(???????????? ?????? ?????????)' checked={this.state.form1_commodities188==='Masur Dal(???????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities188}/>
                                Masur Dal(???????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mataki(???????????????)' checked={this.state.form1_commodities189==='Mataki(???????????????)'}
                                    onChange={this.onChangecommodities189}/>
                                Mataki(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Moath Dal(????????? ????????????)' checked={this.state.form1_commodities190==='Moath Dal(????????? ????????????)'}
                                    onChange={this.onChangecommodities190}/>
                                Moath Dal(????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Moath Dal(????????? ????????????)' checked={this.state.form1_commodities191==='Moath Dal(????????? ????????????)'}
                                    onChange={this.onChangecommodities191}/>
                                Moath Dal(????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Other Pulses(???????????? ???????????????)' checked={this.state.form1_commodities192==='Other Pulses(???????????? ???????????????)'}
                                    onChange={this.onChangecommodities192}/>
                                Other Pulses(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Peas(?????????)' checked={this.state.form1_commodities193==='Peas(?????????)'}
                                    onChange={this.onChangecommodities193}/>
                                Peas(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Red Gram(????????????)' checked={this.state.form1_commodities194==='Red Gram(????????????)'}
                                    onChange={this.onChangecommodities194}/>
                                Red Gram(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Italian Millet(????????????)' checked={this.state.form1_commodities195==='Italian Millet(????????????)'}
                                    onChange={this.onChangecommodities195}/>
                                Italian Millet(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='White Peas(???????????? ?????????)' checked={this.state.form1_commodities196==='White Peas(???????????? ?????????)'}
                                    onChange={this.onChangecommodities196}/>
                                White Peas(???????????? ?????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Spices</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Celery(??????????????????)' checked={this.state.form1_commodities197==='Celery(??????????????????)'}
                                    onChange={this.onChangecommodities197}/>
                                Celery(??????????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Betelnuts(??????????????????)' checked={this.state.form1_commodities198==='Betelnuts(??????????????????)'}
                                    onChange={this.onChangecommodities198}  />
                                Betelnuts(??????????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Black pepper(???????????? ???????????????)' checked={this.state.form1_commodities199==='Black pepper(???????????? ???????????????)'}
                                    onChange={this.onChangecommodities199}/>
                                Black pepper(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cardamoms(??????????????????)' checked={this.state.form1_commodities200==='Cardamoms(??????????????????)'}
                                    onChange={this.onChangecommodities200}/>
                                Cardamoms(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chili Red(????????? ???????????????)' checked={this.state.form1_commodities201==='Chili Red(????????? ???????????????)'}
                                    onChange={this.onChangecommodities201}/>
                                Chili Red(????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cinnamon(?????????????????????)' checked={this.state.form1_commodities202==='Cinnamon(?????????????????????)'}
                                    onChange={this.onChangecommodities202}/>
                                Cinnamon(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cloves(????????????)' checked={this.state.form1_commodities203==='Cloves(????????????)'}
                                    onChange={this.onChangecommodities203}/>
                                Cloves(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Coca(????????????)' checked={this.state.form1_commodities204==='Coca(????????????)'}
                                    onChange={this.onChangecommodities204}/>
                                Coca(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Coconut(??????????????????)' checked={this.state.form1_commodities205==='Coconut(??????????????????)'}
                                    onChange={this.onChangecommodities205}/>
                                Coconut(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Corriander seed(??????????????? ?????? ?????????)' checked={this.state.form1_commodities206==='Corriander seed(??????????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities206}/>
                                Corriander seed(??????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cummin Seed(???????????? ?????? ?????????)' checked={this.state.form1_commodities207==='Cummin Seed(???????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities207}/>
                                Cummin Seed(???????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Dry Chillies(???????????? ???????????????)' checked={this.state.form1_commodities208==='Dry Chillies(???????????? ???????????????)'}
                                    onChange={this.onChangecommodities208}/>
                                Dry Chillies(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Garlic(???????????????)' checked={this.state.form1_commodities209==='Garlic(???????????????)'}
                                    onChange={this.onChangecommodities209}/>
                                Garlic(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ginger(????????????)' checked={this.state.form1_commodities210==='Ginger(????????????)'}
                                    onChange={this.onChangecommodities210}/>
                                Ginger(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Kacholam(???????????????)' checked={this.state.form1_commodities211==='Kacholam(???????????????)'}
                                    onChange={this.onChangecommodities211}/>
                                Kacholam(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mace(?????????)' checked={this.state.form1_commodities212==='Mace(?????????)'}
                                    onChange={this.onChangecommodities212}/>
                                Mace(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Fenugreek Seeds(???????????? ?????????)' checked={this.state.form1_commodities213==='Fenugreek Seeds(???????????? ?????????)'}
                                    onChange={this.onChangecommodities213}/>
                                Fenugreek Seeds(???????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Nutmeg(???????????????)' checked={this.state.form1_commodities214==='Nutmeg(???????????????)'}
                                    onChange={this.onChangecommodities214}/>
                                Nutmeg(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pepper(???????????????) garbled' checked={this.state.form1_commodities215==='Pepper(???????????????) garbled'}
                                    onChange={this.onChangecommodities215}/>
                                Pepper(???????????????) garbled
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pepper(???????????????) ungarbled' checked={this.state.form1_commodities216==='Pepper(???????????????) ungarbled'}
                                    onChange={this.onChangecommodities216}/>
                                Pepper(???????????????) ungarbled
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Saffron(????????????)' checked={this.state.form1_commodities217==='Saffron(????????????)'}
                                    onChange={this.onChangecommodities217}/>
                                Saffron(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Dry Ginger(????????????)' checked={this.state.form1_commodities218==='Dry Ginger(????????????)'}
                                    onChange={this.onChangecommodities218}/>
                                Dry Ginger(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Turmeric(???????????????)' checked={this.state.form1_commodities219==='Turmeric(???????????????)'}
                                    onChange={this.onChangecommodities219}/>
                                Turmeric(???????????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Vegetables</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Alsandikai(???????????????????????????)' checked={this.state.form1_commodities220==='Alsandikai(???????????????????????????)'}
                                    onChange={this.onChangecommodities220}/>
                                 Alsandikai(???????????????????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Amaranthus(???????????????)' checked={this.state.form1_commodities221==='Amaranthus(???????????????)'}
                                    onChange={this.onChangecommodities221}  />
                                Amaranthus(???????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ashgourd(????????? ????????????)' checked={this.state.form1_commodities222==='Ashgourd(????????? ????????????)'}
                                    onChange={this.onChangecommodities222}/>
                                Ashgourd(????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Balekai(?????????????????????)' checked={this.state.form1_commodities223==='Balekai(?????????????????????)'}
                                    onChange={this.onChangecommodities223}/>
                                Balekai(?????????????????????)
                              </div>
                            </label><label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Banana - Green(???????????? - ?????????)' checked={this.state.form1_commodities224==='Banana - Green(???????????? - ?????????)'}
                                    onChange={this.onChangecommodities224}/>
                                Banana - Green(???????????? - ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Beetroot(??????????????????)' checked={this.state.form1_commodities225==='Beetroot(??????????????????)'}
                                    onChange={this.onChangecommodities225}/>
                                Beetroot(??????????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ladies Finger(??????????????????)' checked={this.state.form1_commodities226==='Ladies Finger(??????????????????)'}
                                    onChange={this.onChangecommodities226}  />
                                Ladies Finger(??????????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Binoula(??????????????????)' checked={this.state.form1_commodities227==='Binoula(??????????????????)'}
                                    onChange={this.onChangecommodities227}/>
                                Binoula(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bitter gourd(???????????????)' checked={this.state.form1_commodities228==='Bitter gourd(???????????????)'}
                                    onChange={this.onChangecommodities228}/>
                                Bitter gourd(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bottle gourd(????????????)' checked={this.state.form1_commodities229==='Bottle gourd(????????????)'}
                                    onChange={this.onChangecommodities229}/>
                                Bottle gourd(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Brinjal(???????????????)' checked={this.state.form1_commodities230==='Brinjal(???????????????)'}
                                    onChange={this.onChangecommodities230}/>
                                Brinjal(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cabbage(??????????????? ????????????)' checked={this.state.form1_commodities231==='Cabbage(??????????????? ????????????)'}
                                    onChange={this.onChangecommodities231}/>
                                Cabbage(??????????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Capsicum(??????????????? ???????????????)' checked={this.state.form1_commodities232==='Capsicum(??????????????? ???????????????)'}
                                    onChange={this.onChangecommodities232}/>
                                Capsicum(??????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Carrot(????????????)' checked={this.state.form1_commodities233==='Carrot(????????????)'}
                                    onChange={this.onChangecommodities233}/>
                                Carrot(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cauliflower(?????????????????????)' checked={this.state.form1_commodities234==='Cauliflower(?????????????????????)'}
                                    onChange={this.onChangecommodities234}/>
                                Cauliflower(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chapparad Avare(??????????????? ???????????????)' checked={this.state.form1_commodities235==='Chapparad Avare(??????????????? ???????????????)'}
                                    onChange={this.onChangecommodities235}/>
                                Chapparad Avare(??????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chilly Capsicum(??????????????? ??????????????? ???????????????)' checked={this.state.form1_commodities236==='Chilly Capsicum(??????????????? ??????????????? ???????????????)'}
                                    onChange={this.onChangecommodities236}/>
                                Chilly Capsicum(??????????????? ??????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chow Chow(????????? ?????????)' checked={this.state.form1_commodities237==='Chow Chow(????????? ?????????)'}
                                    onChange={this.onChangecommodities237}/>
                                Chow Chow(????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cluster beans(??????????????? ?????????)' checked={this.state.form1_commodities238==='Cluster beans(??????????????? ?????????)'}
                                    onChange={this.onChangecommodities238}/>
                                Cluster beans(??????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Colacasia(????????????)' checked={this.state.form1_commodities239==='Colacasia(????????????)'}
                                    onChange={this.onChangecommodities239}/>
                                Colacasia(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Coriander(???????????????)' checked={this.state.form1_commodities240==='Coriander(???????????????)'}
                                    onChange={this.onChangecommodities240}/>
                                Coriander(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cowpea(??????????????????)' checked={this.state.form1_commodities241==='Cowpea(??????????????????)'}
                                    onChange={this.onChangecommodities241}/>
                                Cowpea(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cucumbar(???????????????)' checked={this.state.form1_commodities242==='Cucumbar(???????????????)'}
                                    onChange={this.onChangecommodities242}/>
                                Cucumbar(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Drumstick(????????? ?????? ????????????)' checked={this.state.form1_commodities243==='Drumstick(????????? ?????? ????????????)'}
                                    onChange={this.onChangecommodities243}/>
                                Drumstick(????????? ?????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Duster Beans(??????????????? ???????????????)' checked={this.state.form1_commodities244==='Duster Beans(??????????????? ???????????????)'}
                                    onChange={this.onChangecommodities244}/>
                                Duster Beans(??????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Elephant Yam(???????????? ?????????)' checked={this.state.form1_commodities245==='Elephant Yam(???????????? ?????????)'}
                                    onChange={this.onChangecommodities245}/>
                                Elephant Yam(???????????? ?????????) 
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Field Pea(??????????????? ?????????)' checked={this.state.form1_commodities246==='Field Pea(??????????????? ?????????)'}
                                    onChange={this.onChangecommodities246}  />
                                Field Pea(??????????????? ?????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='French Beans(?????????????????? ???????????????)' checked={this.state.form1_commodities247==='French Beans(?????????????????? ???????????????)'}
                                    onChange={this.onChangecommodities247}/>
                                French Beans(?????????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lemon(???????????????)' checked={this.state.form1_commodities248==='Lemon(???????????????)'}
                                    onChange={this.onChangecommodities248}/>
                                Lemon(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ginger(????????????)' checked={this.state.form1_commodities249==='Ginger(????????????)'}
                                    onChange={this.onChangecommodities249}/>
                                Ginger(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Gram Raw(??????????????? ??????)' checked={this.state.form1_commodities250==='Gram Raw(??????????????? ??????)'}
                                    onChange={this.onChangecommodities250}/>
                                Gram Raw(??????????????? ??????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Green Avare(??????????????? ???????????????)' checked={this.state.form1_commodities251==='Green Avare(??????????????? ???????????????)'}
                                    onChange={this.onChangecommodities251}/>
                                Green Avare(??????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Green Chilli(????????? ???????????????)' checked={this.state.form1_commodities252==='Green Chilli(????????? ???????????????)'}
                                    onChange={this.onChangecommodities252}/>
                                Green Chilli(????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Groundnut pods(????????????????????? ?????? ?????????)' checked={this.state.form1_commodities253==='Groundnut pods(????????????????????? ?????? ?????????)'}
                                    onChange={this.onChangecommodities253}/>
                                Groundnut pods(????????????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Guar(???????????????)' checked={this.state.form1_commodities254==='Guar(???????????????)'}
                                    onChange={this.onChangecommodities254}/>
                                Guar(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Indian Beans(?????????????????? ???????????????)' checked={this.state.form1_commodities255==='Indian Beans(?????????????????? ???????????????)'}
                                    onChange={this.onChangecommodities255}/>
                                Indian Beans(?????????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Indian Colza(?????????????????? ?????????????????????)' checked={this.state.form1_commodities256==='Indian Colza(?????????????????? ?????????????????????)'}
                                    onChange={this.onChangecommodities256}/>
                                Indian Colza(?????????????????? ?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Jamamkhan(?????????????????????)' checked={this.state.form1_commodities257==='Jamamkhan(?????????????????????)'}
                                    onChange={this.onChangecommodities257}/>
                                Jamamkhan(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Kartali(?????????????????????)' checked={this.state.form1_commodities258==='Kartali(?????????????????????)'}
                                    onChange={this.onChangecommodities258}/>
                                Kartali(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Knool Khol(???????????? ????????????)' checked={this.state.form1_commodities259==='Knool Khol(???????????? ????????????)'}
                                    onChange={this.onChangecommodities259}/>
                                Knool Khol(???????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Leafy Vegetable(???????????????????????? ???????????????)' checked={this.state.form1_commodities260==='Leafy Vegetable(???????????????????????? ???????????????)'}
                                    onChange={this.onChangecommodities260}/>
                                Leafy Vegetable(???????????????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Little gourd(???????????? ????????????)' checked={this.state.form1_commodities261==='Little gourd(???????????? ????????????)'}
                                    onChange={this.onChangecommodities261}/>
                                Little gourd(???????????? ????????????) 
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Long Melon(???????????? ???????????????)' checked={this.state.form1_commodities262==='Long Melon(???????????? ???????????????)'}
                                    onChange={this.onChangecommodities262}/>
                                Long Melon(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lotus Sticks(????????? ?????? ???????????????)' checked={this.state.form1_commodities263==='Lotus Sticks(????????? ?????? ???????????????)'}
                                    onChange={this.onChangecommodities263}/>
                                Lotus Sticks(????????? ?????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mango(??????) (Raw-Ripe)' checked={this.state.form1_commodities264==='Mango(??????) (Raw-Ripe)'}
                                    onChange={this.onChangecommodities264}/>
                                Mango(??????) (Raw-Ripe)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mushrooms(?????????-????????????)' checked={this.state.form1_commodities265==='Mushrooms(?????????-????????????)'}
                                    onChange={this.onChangecommodities265}/>
                                Mushrooms(?????????-????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Fenugreek(???????????????)' checked={this.state.form1_commodities266==='Fenugreek(???????????????)'}
                                    onChange={this.onChangecommodities266}  />
                                Fenugreek(???????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mint(??????????????????)' checked={this.state.form1_commodities267==='Mint(??????????????????)'}
                                    onChange={this.onChangecommodities267}/>
                                Mint(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Onion(??????????????????)' checked={this.state.form1_commodities268==='Onion(??????????????????)'}
                                    onChange={this.onChangecommodities268}/>
                                Onion(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Onion Green(??????????????? ?????????)' checked={this.state.form1_commodities269==='Onion Green(??????????????? ?????????)'}
                                    onChange={this.onChangecommodities269}/>
                                Onion Green(??????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Papaya(???????????????) (Raw)' checked={this.state.form1_commodities270==='Papaya(???????????????) (Raw)'}
                                    onChange={this.onChangecommodities270}/>
                                Papaya(???????????????) (Raw)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Peas cod(????????? ?????????)' checked={this.state.form1_commodities271==='Peas cod(????????? ?????????)'}
                                    onChange={this.onChangecommodities271}/>
                                Peas cod(????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Peas Wet(????????? ????????????)' checked={this.state.form1_commodities272==='Peas Wet(????????? ????????????)'}
                                    onChange={this.onChangecommodities272}/>
                                Peas Wet(????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pigeon Pea(????????????)' checked={this.state.form1_commodities273==='Pigeon Pea(????????????)'}
                                    onChange={this.onChangecommodities273}/>
                                Pigeon Pea(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pointed gourd(?????????????????? ????????????)' checked={this.state.form1_commodities274==='Pointed gourd(?????????????????? ????????????)'}
                                    onChange={this.onChangecommodities274}/>
                                Pointed gourd(?????????????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Potato(?????????)' checked={this.state.form1_commodities275==='Potato(?????????)'}
                                    onChange={this.onChangecommodities275}/>
                                Potato(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pumpkin(???????????????)' checked={this.state.form1_commodities276==='Pumpkin(???????????????)'}
                                    onChange={this.onChangecommodities276}/>
                                Pumpkin(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Raddish(????????????)' checked={this.state.form1_commodities277==='Raddish(????????????)'}
                                    onChange={this.onChangecommodities277}/>
                                Raddish(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Rat Tail Radish(???????????? ???????????? ????????????)' checked={this.state.form1_commodities278==='Rat Tail Radish(???????????? ???????????? ????????????)'}
                                    onChange={this.onChangecommodities278}/>
                                Rat Tail Radish(???????????? ???????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ridgeguord(????????????)' checked={this.state.form1_commodities279==='Ridgeguord(????????????)'}
                                    onChange={this.onChangecommodities279}/>
                                Ridgeguord(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Round gourd(????????? ????????????)' checked={this.state.form1_commodities280==='Round gourd(????????? ????????????)'}
                                    onChange={this.onChangecommodities280}/>
                                Round gourd(????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Season Leaves(????????? ???????????????)' checked={this.state.form1_commodities281==='Season Leaves(????????? ???????????????)'}
                                    onChange={this.onChangecommodities281}/>
                                Season Leaves(????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Snakeguord(????????????????????????)' checked={this.state.form1_commodities282==='Snakeguord(????????????????????????)'}
                                    onChange={this.onChangecommodities282}/>
                                Snakeguord(????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Spinach(????????????)' checked={this.state.form1_commodities283==='Spinach(????????????)'}
                                    onChange={this.onChangecommodities283}/>
                                Spinach(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sponge gourd(????????????)' checked={this.state.form1_commodities284==='Sponge gourd(????????????)'}
                                    onChange={this.onChangecommodities284}/>
                                Sponge gourd(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Squash(?????????????????????)' checked={this.state.form1_commodities285==='Squash(?????????????????????)'}
                                    onChange={this.onChangecommodities285}/>
                                Squash(?????????????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Surat Beans(???????????? ???????????????)' checked={this.state.form1_commodities286==='Surat Beans(???????????? ???????????????)'}
                                    onChange={this.onChangecommodities286}  />
                                Surat Beans(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sweet Potato(??????????????????)' checked={this.state.form1_commodities287==='Sweet Potato(??????????????????)'}
                                    onChange={this.onChangecommodities287}/>
                                Sweet Potato(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sweet Pumpkin(???????????? ???????????????)' checked={this.state.form1_commodities288==='Sweet Pumpkin(???????????? ???????????????)'}
                                    onChange={this.onChangecommodities288}/>
                                Sweet Pumpkin(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tapioca(?????????????????????)' checked={this.state.form1_commodities289==='Tapioca(?????????????????????)'}
                                    onChange={this.onChangecommodities289}/>
                                Tapioca(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tomato(???????????????)' checked={this.state.form1_commodities290==='Tomato(???????????????)'}
                                    onChange={this.onChangecommodities290}/>
                                Tomato(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Turmeric(???????????????) (raw)' checked={this.state.form1_commodities291==='Turmeric(???????????????) (raw)'}
                                    onChange={this.onChangecommodities291}/>
                                Turmeric(???????????????) (raw)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Turnip(????????????)' checked={this.state.form1_commodities292==='Turnip(????????????)'}
                                    onChange={this.onChangecommodities292}/>
                                Turnip(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='White Pumpkin(???????????? ???????????????)' checked={this.state.form1_commodities293==='White Pumpkin(???????????? ???????????????)'}
                                    onChange={this.onChangecommodities293}/>
                                White Pumpkin(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Yam(???????????????)' checked={this.state.form1_commodities294==='Yam(???????????????)'}
                                    onChange={this.onChangecommodities294}/>
                                Yam(???????????????)
                              </div>
                            </label>
                            
                          </div>
                        </div>
                      </form>
                  <div className="FormDiv7">
                    <label htmlFor="Name">
                      Name :<br />
                      ????????? :
                    </label>
                    <input type="text" placeholder="Enter Your Name" value={this.state.form1_name}
                                onChange={this.onChangename}/>
                  </div>
                  <div className="FormDiv8">
                    <label htmlFor="Number">
                      Phone Number :<br />
                      ???????????? ????????????:
                    </label>
                    <input
                      type="number"
                      placeholder="Enter Your Number"
                      name=""
                      id="Number"
                      value={this.state.form1_phoneno}
                      onChange={this.onChangephoneno}
                    />
                  </div>
                  <button
                    value='Submit'
                    style={{
                      marginTop: "1rem",
                      padding: "0.5rem 4rem",
                      borderRadius: "7px",
                      border: "none",
                      border: "3px solid #0d4c00",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            </form>
            < form onSubmit={this.onSubmit}> 
            <div className="inputContainer2">
              {/* <h1>Form2</h1> */}
              
              <div className="FormDiv2">
              
                <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
                  <label htmlFor="Name">
                    Name :<br />
                    ????????? :
                  </label>
                  <input
                    style={{ marginLeft: "7.1rem" }}
                    type="text"
                    placeholder="Enter Your Name"
                    value={this.state.form2_name}
                    onChange={this.onChangeform2name}
                  />
                </div>
                <div className="FormDiv8" style={{ marginBottom: "0.5rem" }}>
                  <label htmlFor="Number">
                    Phone Number :<br />
                    ???????????? ????????????:
                  </label>
                  <input
                    style={{ marginLeft: "9.2rem" }}
                    type="number"
                    placeholder="Enter Your Number"
                    name=""
                    id="Number"
                    value={this.state.form2_phoneno}
                    onChange={this.onChangeform2phoneno}
                  />
                </div>
                <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
                  <label htmlFor="Name">
                    Name of your Organisation :<br />
                    ???????????? ??????????????? ?????? ????????? :
                  </label>
                  <input type="text" placeholder="Enter Your Organisation Name" value={this.state.form2_organisation}
                  onChange={this.onChangeform2organisation}/>
                </div>
                <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
                  <label htmlFor="Name">
                    City :<br />
                    ????????? :
                  </label>
                  <input
                    style={{ marginLeft: "6.8rem" }}
                    type="text"
                    placeholder="Enter Your City"
                    value={this.state.form2_city}
                    onChange={this.onChangeform2city}
                  />
                </div>
                <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
                  <label htmlFor="Name">
                    State :<br />
                    ??????????????? :
                  </label>
                  <input
                    style={{ marginLeft: "6.8rem" }}
                    type="text"
                    placeholder="Enter Your State"
                    value={this.state.form2_state}
                    onChange={this.onChangeform2state}
                  />
                </div>
                
                <button
                  value='submit'
                  style={{
                    marginTop: "1rem",
                    padding: "0.5rem 4rem",
                    borderRadius: "7px",
                    border: "none",
                    border: "3px solid #0d4c00",
                  }}
                >
                  Submit
                </button>
                
              </div>
              
            </div>
            </form>
            
            < form onSubmit={this.onSubmit3}> 
            <div className="inputContainer3">
              {/* <h1>Form3</h1> */}
              < div className="FormDiv2">
                <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
                  <label htmlFor="Name">
                    Name :<br />
                    ????????? :
                  </label>
                  <input
                    style={{ marginLeft: "7.1rem" }}
                    type="text"
                    placeholder="Enter Your Name"
                    value={this.state.form3_name}
                    onChange={this.onChangeform3name}
                  />
                </div>
                <div className="FormDiv8" style={{ marginBottom: "0.5rem" }}>
                  <label htmlFor="Number">
                    Phone Number :<br />
                    ???????????? ????????????:
                  </label>
                  <input
                    style={{ marginLeft: "9.2rem" }}
                    type="number"
                    placeholder="Enter Your Number"
                    name=""
                    id="Number"
                    value={this.state.form3_phoneno}
                    onChange={this.onChangeform3phoneno}
                  />
                </div>
                <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
                  <label htmlFor="Name">
                    What You Want to Buy?
                    <br />
                    ?????? ???????????? ?????????????????? ??????????????? ??????? :
                  </label>
                </div>
                <div>
                <h5>Beverages</h5>
                <div>
                      <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes2}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cocoa(????????????)' checked={this.state.form3_buyoptions1==='Cocoa(????????????)'}
                                    onChange={this.onChangeform3buyoptions1}/>
                                Cocoa(????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Coffee(???????????????)' checked={this.state.form3_buyoptions2==='Coffee(???????????????)'}
                                    onChange={this.onChangeform3buyoptions2}  />
                                Coffee(???????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-14rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tea(?????????)' checked={this.state.form3_buyoptions3==='Tea(?????????)'}
                                    onChange={this.onChangeform3buyoptions3}/>
                                Tea(?????????)
                              </div>
                            </label>
                            
                          </div>
                        </div>
                      </form>
                      
                    </div>
                    <h5>Cereals</h5>
                    <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes2}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
                          
                          <div id="checkBoxes2">
                            <label for="first1">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-6rem",
                                }}
                              >
                                <input type="checkbox" id="second" value='Amphophalus(??????????????????????????????)' checked={this.state.form3_buyoptions4==='Amphophalus(??????????????????????????????)'}
                                    onChange={this.onChangeform3buyoptions4}/>
                                 Amphophalus(??????????????????????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.8rem",
                                }}
                              >
                                <input type="checkbox" id="second" value='Rice(????????????)' checked={this.state.form3_buyoptions5==='Rice(????????????)'}
                                    onChange={this.onChangeform3buyoptions5}  />
                                Rice(????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="third" value='Bajra(???????????????)' checked={this.state.form3_buyoptions6==='Bajra(???????????????)'}
                                    onChange={this.onChangeform3buyoptions6}/>
                                Bajra(???????????????)
                              </div>
                            </label>
                            <label for="fourth">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="second" value='Jowar(???????????????)' checked={this.state.form3_buyoptions7==='Jowar(???????????????)'}
                                    onChange={this.onChangeform3buyoptions7} />
                                Jowar(???????????????)         
                              </div>
                            </label>
                            <label for="fifth">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-13.1rem",
                                }}
                              >
                                <input type="checkbox" id="second" value='Barley(??????)' checked={this.state.form3_buyoptions8==='Barley(??????)'}
                                    onChange={this.onChangeform3buyoptions8}/>
                                Barley(??????) 
                              </div>
                            </label>
                            <label for="sixth">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10rem",
                                }}
                              >
                                <input type="checkbox" id="second" value='Beaten Rice(???????????? ????????????)' checked={this.state.form3_buyoptions9==='Beaten Rice(???????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions9}/>
                                Beaten Rice(???????????? ????????????)
                              </div>
                            </label>
                            <label for="seven">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Foxtail Millet(???????????????????????? ???????????????)' checked={this.state.form3_buyoptions10==='Foxtail Millet(???????????????????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions10}/>
                                Foxtail Millet(???????????????????????? ???????????????)
                              </div>
                            </label>
                            <label for="eight">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Hybrid Cumbu(???????????????????????? ????????????)' checked={this.state.form3_buyoptions11==='Hybrid Cumbu(???????????????????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions11}/>
                                Hybrid Cumbu(???????????????????????? ????????????)
                              </div>
                            </label>
                            <label for="nine">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Kodo Millet(???????????? ???????????????)' checked={this.state.form3_buyoptions12==='Kodo Millet(???????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions12}/>
                                Kodo Millet(???????????? ???????????????)
                              </div>

                            </label>
                            <label for="ten">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Maize(???????????????)' checked={this.state.form3_buyoptions13==='Maize(???????????????)'}
                                    onChange={this.onChangeform3buyoptions13}/>
                                Maize(???????????????)
                              </div>
                            </label>
                            <label for="eleven">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Paddy(????????? ?????? ?????????)' checked={this.state.form3_buyoptions14==='Paddy(????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions14}/>
                                Paddy(????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="twelve">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Paddy(????????? ?????? ?????????)' checked={this.state.form3_buyoptions15==='Paddy(????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions15}/>
                                Paddy(????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="thirteen">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-13rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ragi(????????????)' checked={this.state.form3_buyoptions16==='Ragi(????????????)'}
                                    onChange={this.onChangeform3buyoptions16}/>
                                 Ragi(????????????) 
                              </div>
                            </label>
                            <label for="fourteen">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sajje(???????????????)' checked={this.state.form3_buyoptions17==='Sajje(???????????????)'}
                                    onChange={this.onChangeform3buyoptions17}/>
                                 Sajje(???????????????)
                              </div>
                            </label>
                            <label for="fifteen">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-13rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Savi(????????????)' checked={this.state.form3_buyoptions18==='Savi(????????????)'}
                                    onChange={this.onChangeform3buyoptions18}/>
                                Savi(????????????)
                              </div>
                            </label>
                            <label for="sixteen">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-13rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Soji(????????????)' checked={this.state.form3_buyoptions19==='Soji(????????????)'}
                                    onChange={this.onChangeform3buyoptions19}/>
                                Soji(????????????)
                              </div>
                            </label>
                            <label for="seventeen">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value=' T.V. Cumbu(??????.??????)' checked={this.state.form3_buyoptions20==='T.V. Cumbu(??????.??????)'}
                                    onChange={this.onChangeform3buyoptions20}/>
                                 T.V. Cumbu(??????.??????)
                              </div>
                            </label>
                            <label for="eighteen">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Wheat(???????????????)' checked={this.state.form3_buyoptions21==='Wheat(???????????????)'}
                                    onChange={this.onChangeform3buyoptions21}/>
                                Wheat(???????????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Drug and Narcotics</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes2}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Arecanut(??????????????????)' checked={this.state.form1_commodities22==='Arecanut(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions22}/>
                                Arecanut(??????????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Betal Leaves(????????? ?????? ???????????????)' checked={this.state.form1_commodities23==='Betal Leaves(????????? ?????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions23}  />
                                Betal Leaves(????????? ?????? ???????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Isabgul(?????????????????????)' checked={this.state.form1_commodities24==='Isabgul(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions24}/>
                                Isabgul(?????????????????????) 
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mahua(????????????)' checked={this.state.form1_commodities25==='Mahua(????????????)'}
                                    onChange={this.onChangeform3buyoptions25}/>
                                Mahua(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Harad(???????????????)' checked={this.state.form1_commodities26==='Harad(???????????????)'}
                                    onChange={this.onChangeform3buyoptions26}/>
                                Harad(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tobacco(??????????????????)' checked={this.state.form1_commodities27==='Tobacco(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions27}/>
                                Tobacco(??????????????????)
                              </div>
                            </label>
                            
                          </div>
                        </div>
                      </form>
                      <h5>Dry Fruits</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes2}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Almond(???????????????)' checked={this.state.form3_buyoptions28==='Almond(???????????????)'}
                                    onChange={this.onChangeform3buyoptions28}/>
                                Almond(???????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cashewnuts(????????????)' checked={this.state.form3_buyoptions29==='Cashewnuts(????????????)'}
                                    onChange={this.onChangeform3buyoptions29}  />
                                Cashewnuts(????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.2rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Dry Grapes(???????????? ???????????????)' checked={this.state.form3_buyoptions30==='Dry Grapes(???????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions30}/>
                                Dry Grapes(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Walnut(???????????????)' checked={this.state.form3_buyoptions31==='Walnut(???????????????)'}
                                    onChange={this.onChangeform3buyoptions31}/>
                                Walnut(???????????????)
                              </div>
                            </label>
                            
                          </div>
                        </div>
                      </form>
                      <h5>Fibre Crops</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes2}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cotton(????????????)' checked={this.state.form3_buyoptions32==='Cotton(????????????)'}
                                    onChange={this.onChangeform3buyoptions32}/>
                                Cotton(????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Jute(?????????)' checked={this.state.form3_buyoptions33==='Jute(?????????)'}
                                    onChange={this.onChangeform3buyoptions33}  />
                                Jute(?????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lint(???????????????)' checked={this.state.form3_buyoptions34==='Lint(???????????????)'}
                                    onChange={this.onChangeform3buyoptions34}/>
                                Lint(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sunhemp(?????????????????????)' checked={this.state.form3_buyoptions35==='Sunhemp(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions35}/>
                                Sunhemp(?????????????????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Flowers</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes2}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Anthorium(????????????????????????)' checked={this.state.form3_buyoptions36==='Anthorium(????????????????????????)'}
                                    onChange={this.onChangeform3buyoptions36}/>
                                 Anthorium(????????????????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Astera(?????????????????????)' checked={this.state.form3_buyoptions37==='Astera(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions37}  />
                                Astera(?????????????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='BOP(?????????????????? ?????? ?????????????????????)' checked={this.state.form3_buyoptions38==='BOP(?????????????????? ?????? ?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions38}/>
                                BOP(?????????????????? ?????? ?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Carnation(???????????? ????????? ?????????)' checked={this.state.form3_buyoptions39==='Carnation(???????????? ????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions39}/>
                                Carnation(???????????? ????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chrysanthemum(????????????????????????)' checked={this.state.form3_buyoptions40==='Chrysanthemum(????????????????????????)'}
                                    onChange={this.onChangeform3buyoptions40}/>
                                Chrysanthemum(????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chrysanthemum(????????????????????????)(Loose)' checked={this.state.form3_buyoptions41==='Chrysanthemum(????????????????????????)(Loose)'}
                                    onChange={this.onChangeform3buyoptions41}/>
                                Chrysanthemum(????????????????????????)(Loose)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Daila(???????????????)' checked={this.state.form3_buyoptions42==='Daila(???????????????)'}
                                    onChange={this.onChangeform3buyoptions42}/>
                                Daila(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Delha(??????????????????)' checked={this.state.form3_buyoptions43==='Delha(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions43}/>
                                Delha(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Gladiolus Bulb(?????????????????????????????? ????????????)' checked={this.state.form3_buyoptions44==='Gladiolus Bulb(?????????????????????????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions44}/>
                                Gladiolus Bulb(?????????????????????????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-6rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Gladiolus Cut Flower(?????????????????????????????? ?????? ??????????????????)' checked={this.state.form3_buyoptions45==='Gladiolus Cut Flower(?????????????????????????????? ?????? ??????????????????)'}
                                    onChange={this.onChangeform3buyoptions45}/>
                                Gladiolus Cut Flower(?????????????????????????????? ?????? ??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Jaffri(???????????????)' checked={this.state.form3_buyoptions46==='Jaffri(???????????????)'}
                                    onChange={this.onChangeform3buyoptions46}/>
                                Jaffri(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Jarbara(????????????)' checked={this.state.form3_buyoptions47==='Jarbara(????????????)'}
                                    onChange={this.onChangeform3buyoptions47}/>
                                Jarbara(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.7rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Jasmine(???????????????)' checked={this.state.form3_buyoptions48==='Jasmine(???????????????)'}
                                    onChange={this.onChangeform3buyoptions48}/>
                                Jasmine(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Kakada(????????????)' checked={this.state.form3_buyoptions49==='Kakada(????????????)'}
                                    onChange={this.onChangeform3buyoptions49}/>
                                Kakada(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Kankambra(???????????????????????????)' checked={this.state.form3_buyoptions50==='Kankambra(???????????????????????????)'}
                                    onChange={this.onChangeform3buyoptions50}/>
                                Kankambra(???????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lilly(????????????)' checked={this.state.form3_buyoptions51==='Lilly(????????????)'}
                                    onChange={this.onChangeform3buyoptions51}/>
                                Lilly(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lotus(????????? ?????????)' checked={this.state.form3_buyoptions52==='Lotus(????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions52}/>
                                Lotus(????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Marget(?????????????????????)' checked={this.state.form3_buyoptions53==='Marget(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions53}/>
                                Marget(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Marigold(??????????????? ?????? ?????????)' checked={this.state.form3_buyoptions54==='Marigold(??????????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions54}/>
                                Marigold(??????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Marigold(??????????????? ?????? ?????????)(loose)' checked={this.state.form3_buyoptions55==='Marigold(??????????????? ?????? ?????????)(loose)'}
                                    onChange={this.onChangeform3buyoptions55}/>
                                Marigold(??????????????? ?????? ?????????)(loose)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Orchid(??????????????????)' checked={this.state.form3_buyoptions56==='Orchid(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions56}/>
                                Orchid(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Patti(???????????????) Calcutta' checked={this.state.form3_buyoptions57==='Patti(???????????????) Calcutta'}
                                    onChange={this.onChangeform3buyoptions57}/>
                                Patti(???????????????) Calcutta
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Raibel(???????????????)' checked={this.state.form3_buyoptions58==='Raibel(???????????????)'}
                                    onChange={this.onChangeform3buyoptions58}/>
                                Raibel(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Rose(???????????????)(Local)' checked={this.state.form3_buyoptions59==='Rose(???????????????)(Local)'}
                                    onChange={this.onChangeform3buyoptions59}/>
                                Rose(???????????????)(Local)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Rose(???????????????)(Loose)' checked={this.state.form3_buyoptions60==='Rose(???????????????)(Loose)'}
                                    onChange={this.onChangeform3buyoptions60}/>
                                Rose(???????????????)(Loose)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Rose(???????????????)(Tata)' checked={this.state.form3_buyoptions61==='Rose(???????????????)(Tata)'}
                                    onChange={this.onChangeform3buyoptions61}/>
                                Rose(???????????????)(Tata)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tube Flower(??????????????? ?????????)' checked={this.state.form3_buyoptions62==='Tube Flower(??????????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions62}/>
                                Tube Flower(??????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tube Rose(????????????????????????)(Double)' checked={this.state.form3_buyoptions63==='Tube Rose(????????????????????????)(Double)'}
                                    onChange={this.onChangeform3buyoptions63}/>
                                Tube Rose(????????????????????????)(Double)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tube Rose(????????????????????????)(Loose)' checked={this.state.form3_buyoptions64==='Tube Rose(????????????????????????)(Loose)'}
                                    onChange={this.onChangeform3buyoptions64}/>
                                Tube Rose(????????????????????????)(Loose)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tube Rose(????????????????????????)(Single)' checked={this.state.form3_buyoptions65==='Tube Rose(????????????????????????)(Single)'}
                                    onChange={this.onChangeform3buyoptions65}/>
                                Tube Rose(????????????????????????)(Single)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Forest Products</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes2}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ambada Seed(?????????????????? ?????????)' checked={this.state.form3_buyoptions66==='Ambada Seed(?????????????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions66}/>
                                Ambada Seed(?????????????????? ?????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Antawala(????????????????????????)' checked={this.state.form3_buyoptions67==='Antawala(????????????????????????)'}
                                    onChange={this.onChangeform3buyoptions67}  />
                                Antawala(????????????????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bamboo(????????????)' checked={this.state.form3_buyoptions68==='Bamboo(????????????)'}
                                    onChange={this.onChangeform3buyoptions68}/>
                                Bamboo(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bay leaf (????????????????????????)' checked={this.state.form3_buyoptions69==='Bay leaf (????????????????????????)'}
                                    onChange={this.onChangeform3buyoptions69}/>
                                Bay leaf (????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Broomstick(??????????????? ?????? ????????????)' checked={this.state.form3_buyoptions70==='Broomstick(??????????????? ?????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions70}/>
                                Broomstick(??????????????? ?????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cane(????????????)' checked={this.state.form3_buyoptions71==='Cane(????????????)'}
                                    onChange={this.onChangeform3buyoptions71}/>
                                Cane(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Firewood(???????????????)' checked={this.state.form3_buyoptions72==='Firewood(???????????????)'}
                                    onChange={this.onChangeform3buyoptions72}/>
                                Firewood(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Flower Broom(????????? ???????????????)' checked={this.state.form3_buyoptions73==='Flower Broom(????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions73}/>
                                Flower Broom(????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Hippe Seed(?????????????????? ?????????)' checked={this.state.form3_buyoptions74==='Hippe Seed(?????????????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions74}/>
                                Hippe Seed(?????????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Jute Seed(????????? ?????????)' checked={this.state.form3_buyoptions75==='Jute Seed(????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions75}/>
                                Jute Seed(????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mahua Seed(Hippe seed)' checked={this.state.form3_buyoptions76==='Mahua Seed(Hippe seed)'}
                                    onChange={this.onChangeform3buyoptions76}/>
                                Mahua Seed(Hippe seed)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Neem Seed(????????? ?????????)' checked={this.state.form3_buyoptions77==='Neem Seed(????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions77}/>
                                Neem Seed(????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pundi Seed(??????????????? ?????????)' checked={this.state.form3_buyoptions78==='Pundi Seed(??????????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions78}/>
                                Pundi Seed(??????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Resinwood(??????????????????)' checked={this.state.form3_buyoptions79==='Resinwood(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions79}/>
                                Resinwood(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Soapnut(????????????)' checked={this.state.form3_buyoptions80==='Soapnut(????????????)'}
                                    onChange={this.onChangeform3buyoptions80}/>
                                Soapnut(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tamarind Fruit(???????????? ?????? ??????)' checked={this.state.form3_buyoptions81==='Tamarind Fruit(???????????? ?????? ??????)'}
                                    onChange={this.onChangeform3buyoptions81}/>
                                Tamarind Fruit(???????????? ?????? ??????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tamarind Seed(???????????? ?????? ?????????)' checked={this.state.form3_buyoptions82==='Tamarind Seed(???????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions82}/>
                                Tamarind Seed(???????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tamarind Seed(???????????? ?????? ?????????)' checked={this.state.form3_buyoptions83==='Tamarind Seed(???????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions83}/>
                                Tamarind Seed(???????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Wood(???????????????)' checked={this.state.form3_buyoptions84==='Wood(???????????????)'}
                                    onChange={this.onChangeform3buyoptions84}/>
                                Wood(???????????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Fruits</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes2}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Amla(????????????)' checked={this.state.form3_buyoptions85==='Amla(????????????)'}
                                    onChange={this.onChangeform3buyoptions85}/>
                                Amla(????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Apple(?????????)' checked={this.state.form3_buyoptions86==='Apple(?????????)'}
                                    onChange={this.onChangeform3buyoptions86}  />
                                Apple(?????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Apricot(??????????????????)' checked={this.state.form3_buyoptions87==='Apricot(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions87}/>
                                Apricot(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Banana(????????????)' checked={this.state.form3_buyoptions88==='Banana(????????????)'}
                                    onChange={this.onChangeform3buyoptions88}/>
                                Banana(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ber(?????????)' checked={this.state.form3_buyoptions89==='Ber(?????????)'}
                                    onChange={this.onChangeform3buyoptions89}/>
                                Ber(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Borehannu(?????????????????????)' checked={this.state.form3_buyoptions90==='Borehannu(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions90}/>
                                Borehannu(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chakotha(???????????????)' checked={this.state.form3_buyoptions91==='Chakotha(???????????????)'}
                                    onChange={this.onChangeform3buyoptions91}/>
                                Chakotha(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cherry(????????????)' checked={this.state.form3_buyoptions92==='Cherry(????????????)'}
                                    onChange={this.onChangeform3buyoptions92}/>
                                Cherry(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chikoos(????????????)' checked={this.state.form3_buyoptions93==='Chikoos(????????????)'}
                                    onChange={this.onChangeform3buyoptions93}/>
                                Chikoos(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Custard Apple(???????????????)' checked={this.state.form3_buyoptions94==='Custard Apple(???????????????)'}
                                    onChange={this.onChangeform3buyoptions94}/>
                                Custard Apple(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Grapes(???????????????)' checked={this.state.form3_buyoptions95==='Grapes(???????????????)'}
                                    onChange={this.onChangeform3buyoptions95}/>
                                Grapes(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Guava(???????????????)' checked={this.state.form3_buyoptions96==='Guava(???????????????)'}
                                    onChange={this.onChangeform3buyoptions96}/>
                                Guava(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Jack Fruit(????????????)' checked={this.state.form3_buyoptions97==='Jack Fruit(????????????)'}
                                    onChange={this.onChangeform3buyoptions97}/>
                                Jack Fruit(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Blackberry(???????????????)' checked={this.state.form3_buyoptions98==='Blackberry(???????????????)'}
                                    onChange={this.onChangeform3buyoptions98}/>
                                Blackberry(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Musk Melon(??????????????????)' checked={this.state.form3_buyoptions99==='Musk Melon(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions99}/>
                                Musk Melon(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Kinnow(??????????????????)' checked={this.state.form3_buyoptions100==='Kinnow(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions100}/>
                                Kinnow(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lime(????????????????????? ???????????????)' checked={this.state.form3_buyoptions101==='Lime(????????????????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions101}/>
                                Lime(????????????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Litchi(????????????)' checked={this.state.form3_buyoptions102==='Litchi(????????????)'}
                                    onChange={this.onChangeform3buyoptions102}/>
                                Litchi(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lukad(??????????????????)' checked={this.state.form3_buyoptions103==='Lukad(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions103}/>
                                Lukad(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mango(??????)' checked={this.state.form3_buyoptions104==='Mango(??????)'}
                                    onChange={this.onChangeform3buyoptions104}/>
                                Mango(??????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Marasebu(????????????????????????)' checked={this.state.form3_buyoptions105==='Marasebu(????????????????????????)'}
                                    onChange={this.onChangeform3buyoptions105}/>
                                Marasebu(????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sweet Lime(???????????? ???????????????)' checked={this.state.form3_buyoptions106==='Sweet Lime(???????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions106}/>
                                Sweet Lime(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Nearle Hannu(??????????????? ?????? ?????????)' checked={this.state.form3_buyoptions107==='Nearle Hannu(??????????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions107}/>
                                Nearle Hannu(??????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Nelli Kai(?????????????????? ?????????)' checked={this.state.form3_buyoptions108==='Nelli Kai(?????????????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions108}/>
                                Nelli Kai(?????????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Orange(???????????????)' checked={this.state.form3_buyoptions109==='Orange(???????????????)'}
                                    onChange={this.onChangeform3buyoptions109}/>
                                Orange(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Papaya(???????????????)' checked={this.state.form3_buyoptions110==='Papaya(???????????????)'}
                                    onChange={this.onChangeform3buyoptions110}/>
                                Papaya(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Peach(?????????)' checked={this.state.form3_buyoptions111==='Peach(?????????)'}
                                    onChange={this.onChangeform3buyoptions111}/>
                                Peach(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pear(?????????????????????)(Marasebu)' checked={this.state.form3_buyoptions112==='Pear(?????????????????????)(Marasebu)'}
                                    onChange={this.onChangeform3buyoptions112}/>
                                Pear(?????????????????????)(Marasebu)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Persimon(??????????????????)' checked={this.state.form3_buyoptions113==='Persimon(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions113}/>
                                Persimon(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pineapple(?????????????????????)' checked={this.state.form3_buyoptions114==='Pineapple(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions114}/>
                                Pineapple(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Plum(???????????????????????????)' checked={this.state.form3_buyoptions115==='Plum(???????????????????????????)'}
                                    onChange={this.onChangeform3buyoptions115}/>
                                Plum(???????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pomegranate(????????????)' checked={this.state.form3_buyoptions116==='Pomegranate(????????????)'}
                                    onChange={this.onChangeform3buyoptions116}/>
                                Pomegranate(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Seetapal(?????????????????????)' checked={this.state.form3_buyoptions117==='Seetapal(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions117}/>
                                Seetapal(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Siddota(????????????????????????)' checked={this.state.form3_buyoptions118==='Siddota(????????????????????????)'}
                                    onChange={this.onChangeform3buyoptions118}/>
                                Siddota(????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tender Coconut(??????????????? ??????????????????)' checked={this.state.form3_buyoptions119==='Tender Coconut(??????????????? ??????????????????)'}
                                    onChange={this.onChangeform3buyoptions119}/>
                                Tender Coconut(??????????????? ??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Water Melon(???????????????)' checked={this.state.form3_buyoptions120==='Water Melon(???????????????)'}
                                    onChange={this.onChangeform3buyoptions120}/>
                                Water Melon(???????????????)
                              </div>
                            </label>
                            
                            
                          </div>
                        </div>
                      </form>
                      <h5>Live Stock,Poultry and Fisheries</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bull(?????????)' checked={this.state.form3_buyoptions121==='Bull(?????????)'}
                                    onChange={this.onChangeform3buyoptions121}/>
                                Bull(?????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Calf(???????????????)' checked={this.state.form3_buyoptions122==='Calf(???????????????)'}
                                    onChange={this.onChangeform3buyoptions122}  />
                                Calf(???????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cock(??????????????????)' checked={this.state.form3_buyoptions123==='Cock(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions123}/>
                                Cock(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cow(?????????)' checked={this.state.form3_buyoptions124==='Cow'}
                                    onChange={this.onChangeform3buyoptions124}/>
                                Cow(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Duck(???????????????)' checked={this.state.form3_buyoptions125==='Duck(???????????????)'}
                                    onChange={this.onChangeform3buyoptions125}/>
                                Duck(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Egg(????????????)' checked={this.state.form3_buyoptions126==='Egg(????????????)'}
                                    onChange={this.onChangeform3buyoptions126}/>
                                Egg(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Fish(????????????)' checked={this.state.form3_buyoptions127==='Fish(????????????)'}
                                    onChange={this.onChangeform3buyoptions127}/>
                                Fish(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Goat(????????????)' checked={this.state.form3_buyoptions128==='Goat(????????????)'}
                                    onChange={this.onChangeform3buyoptions128}/>
                                Goat(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='He Buffalo(?????? ????????????)' checked={this.state.form3_buyoptions129==='He Buffalo(?????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions129}/>
                                He Buffalo(?????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Hen(??????????????????)' checked={this.state.form3_buyoptions130==='Hen'}
                                    onChange={this.onChangeform3buyoptions130}/>
                                Hen(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ox(?????????)' checked={this.state.form3_buyoptions131==='Ox(?????????)'}
                                    onChange={this.onChangeform3buyoptions131}/>
                                Ox(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pigs(????????????)' checked={this.state.form3_buyoptions132==='Pigs(????????????)'}
                                    onChange={this.onChangeform3buyoptions132}/>
                                Pigs(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ram(??????????????? ???????????????)' checked={this.state.form3_buyoptions133==='Ram(??????????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions133}/>
                                Ram(??????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='She Buffalo(?????? ????????????)' checked={this.state.form3_buyoptions134==='She Buffalo(?????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions134}/>
                                She Buffalo(?????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='She Goat(?????? ????????????)' checked={this.state.form3_buyoptions135==='She Goat(?????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions135}/>
                                She Goat(?????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sheep(????????????)' checked={this.state.form3_buyoptions136==='Sheep(????????????)'}
                                    onChange={this.onChangeform3buyoptions136}/>
                                Sheep(????????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Oil Seeds</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes2}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Castor Seed(??????????????? ?????????)' checked={this.state.form3_buyoptions137==='Castor Seed(??????????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions137}/>
                                Castor Seed(??????????????? ?????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Coconut Seed(?????????????????? ?????????)' checked={this.state.form3_buyoptions139==='Coconut Seed(?????????????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions138}  />
                                Coconut Seed(?????????????????? ?????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Copra(???????????????)' checked={this.state.form3_buyoptions139==='Copra(???????????????)'}
                                    onChange={this.onChangeform3buyoptions139}/>
                                Copra(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cotton Seed(???????????? ?????????)' checked={this.state.form3_buyoptions140==='Cotton Seed(???????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions140}/>
                                Cotton Seed(???????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ground Nut Seed(????????????????????? ?????? ?????????)' checked={this.state.form3_buyoptions141==='Ground Nut Seed(????????????????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions141}/>
                                Ground Nut Seed(????????????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Groundnut(?????????????????????)' checked={this.state.form3_buyoptions142==='Groundnut(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions142}/>
                                Groundnut(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Groundnut(?????????????????????) (Split)' checked={this.state.form3_buyoptions143==='Groundnut(?????????????????????) (Split)'}
                                    onChange={this.onChangeform3buyoptions143}/>
                                Groundnut(?????????????????????) (Split)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Gurellu(??????????????????)' checked={this.state.form3_buyoptions144==='Gurellu(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions144}/>
                                Gurellu(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Honge seed(???????????? ?????????)' checked={this.state.form3_buyoptions145==='Honge seed(???????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions145}/>
                                Honge seed(???????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Linseed(???????????? ?????? ?????????)' checked={this.state.form3_buyoptions146==='Linseed(???????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions146}/>
                                Linseed(???????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mustard(???????????????)' checked={this.state.form3_buyoptions147==='Mustard(???????????????)'}
                                    onChange={this.onChangeform3buyoptions147}/>
                                Mustard(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Niger Seed(??????????????? ?????????)' checked={this.state.form3_buyoptions148==='Niger Seed(??????????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions148}/>
                                Niger Seed(??????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Safflower(???????????????)' checked={this.state.form3_buyoptions149==='Safflower(???????????????)'}
                                    onChange={this.onChangeform3buyoptions149}/>
                                Safflower(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sesamum(Sesamum)' checked={this.state.form3_buyoptions150==='Sesamum(Sesamum)'}
                                    onChange={this.onChangeform3buyoptions150}/>
                                Sesamum(Sesamum)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Soyabean(???????????? ?????????)' checked={this.state.form3_buyoptions151==='Soyabean(???????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions151}/>
                                Soyabean(???????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sunflower(????????????????????????)' checked={this.state.form3_buyoptions152==='Sunflower(????????????????????????)'}
                                    onChange={this.onChangeform3buyoptions152}/>
                                Sunflower(????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sunflower Seed(???????????????????????? ?????? ?????????)' checked={this.state.form3_buyoptions153==='Sunflower Seed(???????????????????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions153}/>
                                Sunflower Seed(???????????????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Suva(????????????) (Dill Seed)' checked={this.state.form3_buyoptions154==='Suva(????????????) (Dill Seed)'}
                                    onChange={this.onChangeform3buyoptions154}/>
                                Suva(????????????) (Dill Seed)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Taramira(????????????????????????)' checked={this.state.form3_buyoptions155==='Taramira(????????????????????????)'}
                                    onChange={this.onChangeform3buyoptions155}/>
                                Taramira(????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Toria(??????????????????)' checked={this.state.form3_buyoptions156==='Toria(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions156}/>
                                Toria(??????????????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Oils and Fats</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes2}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Butter(???????????????)' checked={this.state.form3_buyoptions157==='Butter(???????????????)'}
                                    onChange={this.onChangeform3buyoptions157}/>
                                Butter(???????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Castor Oil(??????????????? ?????? ?????????)' checked={this.state.form3_buyoptions158==='Castor Oil(??????????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions158}  />
                                Castor Oil(??????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Coconut Oil(?????????????????? ?????? ?????????)' checked={this.state.form3_buyoptions159==='Coconut Oil(?????????????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions159}/>
                                Coconut Oil(?????????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Dalda(???????????????)' checked={this.state.form3_buyoptions160==='Dalda(???????????????)'}
                                    onChange={this.onChangeform3buyoptions160}/>
                                Dalda(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ghee(??????)' checked={this.state.form3_buyoptions161==='Ghee(??????)'}
                                    onChange={this.onChangeform3buyoptions161}/>
                                Ghee(??????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Gingelly Oil(????????????????????? ?????????)' checked={this.state.form3_buyoptions162==='Gingelly Oil(????????????????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions162}/>
                                Gingelly Oil(????????????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-6.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ground Nut Oil(????????????????????? ?????? ?????????)' checked={this.state.form3_buyoptions163==='Ground Nut Oil(????????????????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions163}/>
                                Ground Nut Oil(????????????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mustard Oil(??????????????? ?????????)'checked={this.state.form3_buyoptions164==='Mustard Oil(??????????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions164}/>
                                Mustard Oil(??????????????? ?????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Pulses</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes2}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Alasande Gram(???????????????????????? ???????????????)' checked={this.state.form3_buyoptions165==='Alasande Gram(???????????????????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions165}/>
                                Alasande Gram(???????????????????????? ???????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Arhar (????????????)(Whole)' checked={this.state.form3_buyoptions166==='Arhar (????????????)(Whole)'}
                                    onChange={this.onChangeform3buyoptions166}  />
                                Arhar (????????????)(Whole)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Arhar Dal(???????????? ????????????)(Tur Dal)' checked={this.state.form3_buyoptions167==='Arhar Dal(???????????? ????????????)(Tur Dal)'}
                                    onChange={this.onChangeform3buyoptions167}/>
                                Arhar Dal(???????????? ????????????)(Tur Dal)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Avare Dal(??????????????? ????????????)' checked={this.state.form3_buyoptions168==='Avare Dal(??????????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions168}/>
                                Avare Dal(??????????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Beans(??????????????????)' checked={this.state.form3_buyoptions169==='Beans(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions169}/>
                                Beans(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bengal Gram Dal (????????? ?????????)' checked={this.state.form3_buyoptions170==='Bengal Gram Dal (????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions170}/>
                                Bengal Gram Dal (????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-6.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bengal Gram(????????? ?????????)(Gram)(Whole)' checked={this.state.form3_buyoptions171==='Bengal Gram(????????? ?????????)(Gram)(Whole)'}
                                    onChange={this.onChangeform3buyoptions171}/>
                                Bengal Gram(????????? ?????????)(Gram)(Whole)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Big Gram(???????????? ???????????????)' checked={this.state.form3_buyoptions172==='Big Gram(???????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions172}/>
                                Big Gram(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-6.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Black Gram(???????????? ?????????) (Urd Beans)(Whole)' checked={this.state.form3_buyoptions173==='Black Gram(???????????? ?????????) (Urd Beans)(Whole)'}
                                    onChange={this.onChangeform3buyoptions173}/>
                                Black Gram(???????????? ?????????) (Urd Beans)(Whole)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-6.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Black Gram Dal(???????????? ????????? ?????????) (Urd Dal)' checked={this.state.form3_buyoptions174==='Black Gram Dal(???????????? ????????? ?????????) (Urd Dal)'}
                                    onChange={this.onChangeform3buyoptions174}/>
                                Black Gram Dal(???????????? ????????? ?????????) (Urd Dal)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bullar(??????????????????)' checked={this.state.form3_buyoptions175==='Bullar(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions175}/>
                                Bullar(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chennangi(???????????????????????????) (Whole)' checked={this.state.form3_buyoptions176==='Chennangi(???????????????????????????) (Whole)'}
                                    onChange={this.onChangeform3buyoptions176}/>
                                Chennangi(???????????????????????????) (Whole)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chennangi Dal(??????????????????????????? ????????????)' checked={this.state.form3_buyoptions177==='Chennangi Dal(??????????????????????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions177}/>
                                Chennangi Dal(??????????????????????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cowpea (??????????????????)' checked={this.state.form3_buyoptions178==='Cowpea (??????????????????)'}
                                    onChange={this.onChangeform3buyoptions178}/>
                                Cowpea (??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Dal (??????)' checked={this.state.form3_buyoptions179==='Dal (??????)'}
                                    onChange={this.onChangeform3buyoptions179}/>
                                Dal (??????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Green Gram (????????????)(Whole)' checked={this.state.form3_buyoptions180==='Green Gram (????????????)(Whole)'}
                                    onChange={this.onChangeform3buyoptions180}/>
                                Green Gram (????????????)(Whole)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-6.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Green Gram Dal(???????????? ?????????) (Moong Dal)' checked={this.state.form3_buyoptions181==='Green Gram Dal(???????????? ?????????) (Moong Dal)'}
                                    onChange={this.onChangeform3buyoptions181}/>
                                Green Gram Dal(???????????? ?????????) (Moong Dal)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Green Peas(????????? ?????????)' checked={this.state.form3_buyoptions182==='Green Peas(????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions182}/>
                                Green Peas(????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chickpeas(?????????)' checked={this.state.form3_buyoptions183==='Chickpeas(?????????)'}
                                    onChange={this.onChangeform3buyoptions183}/>
                                Chickpeas(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Karamani(??????????????????)' checked={this.state.form3_buyoptions184==='Karamani(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions184}/>
                                Karamani(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Horse Gram(????????? ?????? ?????????)' checked={this.state.form3_buyoptions185==='Horse Gram(????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions185}/>
                                Horse Gram(????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lak(?????????)(Teora)' checked={this.state.form3_buyoptions186==='Lak(?????????)(Teora)'}
                                    onChange={this.onChangeform3buyoptions186}/>
                                Lak(?????????)(Teora)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lentil (????????????)(Whole)' checked={this.state.form3_buyoptions187==='Lentil (????????????)(Whole)'}
                                    onChange={this.onChangeform3buyoptions187}/>
                                Lentil (????????????)(Whole)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Masur Dal(???????????? ?????? ?????????)' checked={this.state.form3_buyoptions188==='Masur Dal(???????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions188}/>
                                Masur Dal(???????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mataki(???????????????)' checked={this.state.form3_buyoptions189==='Mataki(???????????????)'}
                                    onChange={this.onChangeform3buyoptions189}/>
                                Mataki(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Moath Dal(????????? ????????????)' checked={this.state.form3_buyoptions190==='Moath Dal(????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions190}/>
                                Moath Dal(????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Moath Dal(????????? ????????????)' checked={this.state.form3_buyoptions191==='Moath Dal(????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions191}/>
                                Moath Dal(????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Other Pulses(???????????? ???????????????)' checked={this.state.form3_buyoptions192==='Other Pulses(???????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions192}/>
                                Other Pulses(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Peas(?????????)' checked={this.state.form3_buyoptions193==='Peas(?????????)'}
                                    onChange={this.onChangeform3buyoptions193}/>
                                Peas(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Red Gram(????????????)' checked={this.state.form3_buyoptions194==='Red Gram(????????????)'}
                                    onChange={this.onChangeform3buyoptions194}/>
                                Red Gram(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Italian Millet(????????????)' checked={this.state.form3_buyoptions195==='Italian Millet(????????????)'}
                                    onChange={this.onChangeform3buyoptions195}/>
                                Italian Millet(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='White Peas(???????????? ?????????)' checked={this.state.form3_buyoptions196==='White Peas(???????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions196}/>
                                White Peas(???????????? ?????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Spices</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes2}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Celery(??????????????????)' checked={this.state.form3_buyoptions197==='Celery(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions197}/>
                                Celery(??????????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Betelnuts(??????????????????)' checked={this.state.form3_buyoptions198==='Betelnuts(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions198}  />
                                Betelnuts(??????????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Black pepper(???????????? ???????????????)' checked={this.state.form3_buyoptions199==='Black pepper(???????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions199}/>
                                Black pepper(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cardamoms(??????????????????)' checked={this.state.form3_buyoptions200==='Cardamoms(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions200}/>
                                Cardamoms(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chili Red(????????? ???????????????)' checked={this.state.form3_buyoptions201==='Chili Red(????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions201}/>
                                Chili Red(????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cinnamon(?????????????????????)' checked={this.state.form3_buyoptions202==='Cinnamon(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions202}/>
                                Cinnamon(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cloves(????????????)' checked={this.state.form3_buyoptions203==='Cloves(????????????)'}
                                    onChange={this.onChangeform3buyoptions203}/>
                                Cloves(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Coca(????????????)' checked={this.state.form3_buyoptions204==='Coca(????????????)'}
                                    onChange={this.onChangeform3buyoptions204}/>
                                Coca(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Coconut(??????????????????)' checked={this.state.form3_buyoptions205==='Coconut(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions205}/>
                                Coconut(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Corriander seed(??????????????? ?????? ?????????)' checked={this.state.form3_buyoptions206==='Corriander seed(??????????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions206}/>
                                Corriander seed(??????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cummin Seed(???????????? ?????? ?????????)' checked={this.state.form3_buyoptions207==='Cummin Seed(???????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions207}/>
                                Cummin Seed(???????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Dry Chillies(???????????? ???????????????)' checked={this.state.form3_buyoptions208==='Dry Chillies(???????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions208}/>
                                Dry Chillies(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Garlic(???????????????)' checked={this.state.form3_buyoptions209==='Garlic(???????????????)'}
                                    onChange={this.onChangeform3buyoptions209}/>
                                Garlic(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ginger(????????????)' checked={this.state.form3_buyoptions210==='Ginger(????????????)'}
                                    onChange={this.onChangeform3buyoptions210}/>
                                Ginger(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Kacholam(???????????????)' checked={this.state.form3_buyoptions211==='Kacholam(???????????????)'}
                                    onChange={this.onChangeform3buyoptions211}/>
                                Kacholam(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mace(?????????)' checked={this.state.form3_buyoptions212==='Mace(?????????)'}
                                    onChange={this.onChangeform3buyoptions212}/>
                                Mace(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Fenugreek Seeds(???????????? ?????????)' checked={this.state.form3_buyoptions213==='Fenugreek Seeds(???????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions213}/>
                                Fenugreek Seeds(???????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Nutmeg(???????????????)' checked={this.state.form3_buyoptions214==='Nutmeg(???????????????)'}
                                    onChange={this.onChangeform3buyoptions214}/>
                                Nutmeg(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pepper(???????????????) garbled' checked={this.state.form3_buyoptions215==='Pepper(???????????????) garbled'}
                                    onChange={this.onChangeform3buyoptions215}/>
                                Pepper(???????????????) garbled
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pepper(???????????????) ungarbled' checked={this.state.form3_buyoptions216==='Pepper(???????????????) ungarbled'}
                                    onChange={this.onChangeform3buyoptions216}/>
                                Pepper(???????????????) ungarbled
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Saffron(????????????)' checked={this.state.form3_buyoptions217==='Saffron(????????????)'}
                                    onChange={this.onChangeform3buyoptions217}/>
                                Saffron(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Dry Ginger(????????????)' checked={this.state.form3_buyoptions218==='Dry Ginger(????????????)'}
                                    onChange={this.onChangeform3buyoptions218}/>
                                Dry Ginger(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Turmeric(???????????????)' checked={this.state.form3_buyoptions219==='Turmeric(???????????????)'}
                                    onChange={this.onChangeform3buyoptions219}/>
                                Turmeric(???????????????)
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                      <h5>Vegetables</h5>
                  <form>
                        <div className="multipleSelection">
                          <div className="selectBox" onClick={this.showCheckboxes2}>
                            <select>
                              <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                          </div>
    
                          <div id="checkBoxes2">
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Alsandikai(???????????????????????????)' checked={this.state.form3_buyoptions220==='Alsandikai(???????????????????????????)'}
                                    onChange={this.onChangeform3buyoptions220}/>
                                 Alsandikai(???????????????????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Amaranthus(???????????????)' checked={this.state.form3_buyoptions221==='Amaranthus(???????????????)'}
                                    onChange={this.onChangeform3buyoptions221}  />
                                Amaranthus(???????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ashgourd(????????? ????????????)' checked={this.state.form3_buyoptions222==='Ashgourd(????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions222}/>
                                Ashgourd(????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Balekai(?????????????????????)' checked={this.state.form3_buyoptions223==='Balekai(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions223}/>
                                Balekai(?????????????????????)
                              </div>
                            </label><label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Banana - Green(???????????? - ?????????)' checked={this.state.form3_buyoptions224==='Banana - Green(???????????? - ?????????)'}
                                    onChange={this.onChangeform3buyoptions224}/>
                                Banana - Green(???????????? - ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Beetroot(??????????????????)' checked={this.state.form3_buyoptions225==='Beetroot(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions225}/>
                                Beetroot(??????????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ladies Finger(??????????????????)' checked={this.state.form3_buyoptions226==='Ladies Finger(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions226}  />
                                Ladies Finger(??????????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Binoula(??????????????????)' checked={this.state.form3_buyoptions227==='Binoula(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions227}/>
                                Binoula(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bitter gourd(???????????????)' checked={this.state.form3_buyoptions228==='Bitter gourd(???????????????)'}
                                    onChange={this.onChangeform3buyoptions228}/>
                                Bitter gourd(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Bottle gourd(????????????)' checked={this.state.form3_buyoptions229==='Bottle gourd(????????????)'}
                                    onChange={this.onChangeform3buyoptions229}/>
                                Bottle gourd(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Brinjal(???????????????)' checked={this.state.form3_buyoptions230==='Brinjal(???????????????)'}
                                    onChange={this.onChangeform3buyoptions230}/>
                                Brinjal(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cabbage(??????????????? ????????????)' checked={this.state.form3_buyoptions231==='Cabbage(??????????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions231}/>
                                Cabbage(??????????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Capsicum(??????????????? ???????????????)' checked={this.state.form3_buyoptions232==='Capsicum(??????????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions232}/>
                                Capsicum(??????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Carrot(????????????)' checked={this.state.form3_buyoptions233==='Carrot(????????????)'}
                                    onChange={this.onChangeform3buyoptions233}/>
                                Carrot(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cauliflower(?????????????????????)' checked={this.state.form3_buyoptions234==='Cauliflower(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions234}/>
                                Cauliflower(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chapparad Avare(??????????????? ???????????????)' checked={this.state.form3_buyoptions235==='Chapparad Avare(??????????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions235}/>
                                Chapparad Avare(??????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chilly Capsicum(??????????????? ??????????????? ???????????????)' checked={this.state.form3_buyoptions236==='Chilly Capsicum(??????????????? ??????????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions236}/>
                                Chilly Capsicum(??????????????? ??????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Chow Chow(????????? ?????????)' checked={this.state.form3_buyoptions237==='Chow Chow(????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions237}/>
                                Chow Chow(????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cluster beans(??????????????? ?????????)' checked={this.state.form3_buyoptions238==='Cluster beans(??????????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions238}/>
                                Cluster beans(??????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Colacasia(????????????)' checked={this.state.form3_buyoptions239==='Colacasia(????????????)'}
                                    onChange={this.onChangeform3buyoptions239}/>
                                Colacasia(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Coriander(???????????????)' checked={this.state.form3_buyoptions240==='Coriander(???????????????)'}
                                    onChange={this.onChangeform3buyoptions240}/>
                                Coriander(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cowpea(??????????????????)' checked={this.state.form3_buyoptions241==='Cowpea(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions241}/>
                                Cowpea(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Cucumbar(???????????????)' checked={this.state.form3_buyoptions242==='Cucumbar(???????????????)'}
                                    onChange={this.onChangeform3buyoptions242}/>
                                Cucumbar(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Drumstick(????????? ?????? ????????????)' checked={this.state.form3_buyoptions243==='Drumstick(????????? ?????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions243}/>
                                Drumstick(????????? ?????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Duster Beans(??????????????? ???????????????)' checked={this.state.form3_buyoptions244==='Duster Beans(??????????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions244}/>
                                Duster Beans(??????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Elephant Yam(???????????? ?????????)' checked={this.state.form3_buyoptions245==='Elephant Yam(???????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions245}/>
                                Elephant Yam(???????????? ?????????) 
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Field Pea(??????????????? ?????????)' checked={this.state.form3_buyoptions246==='Field Pea(??????????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions246}  />
                                Field Pea(??????????????? ?????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='French Beans(?????????????????? ???????????????)' checked={this.state.form3_buyoptions247==='French Beans(?????????????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions247}/>
                                French Beans(?????????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lemon(???????????????)' checked={this.state.form3_buyoptions248==='Lemon(???????????????)'}
                                    onChange={this.onChangeform3buyoptions248}/>
                                Lemon(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ginger(????????????)' checked={this.state.form3_buyoptions249==='Ginger(????????????)'}
                                    onChange={this.onChangeform3buyoptions249}/>
                                Ginger(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Gram Raw(??????????????? ??????)' checked={this.state.form3_buyoptions250==='Gram Raw(??????????????? ??????)'}
                                    onChange={this.onChangeform3buyoptions250}/>
                                Gram Raw(??????????????? ??????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Green Avare(??????????????? ???????????????)' checked={this.state.form3_buyoptions251==='Green Avare(??????????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions251}/>
                                Green Avare(??????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Green Chilli(????????? ???????????????)' checked={this.state.form3_buyoptions252==='Green Chilli(????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions252}/>
                                Green Chilli(????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Groundnut pods(????????????????????? ?????? ?????????)' checked={this.state.form3_buyoptions253==='Groundnut pods(????????????????????? ?????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions253}/>
                                Groundnut pods(????????????????????? ?????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Guar(???????????????)' checked={this.state.form3_buyoptions254==='Guar(???????????????)'}
                                    onChange={this.onChangeform3buyoptions254}/>
                                Guar(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Indian Beans(?????????????????? ???????????????)' checked={this.state.form3_buyoptions255==='Indian Beans(?????????????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions255}/>
                                Indian Beans(?????????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Indian Colza(?????????????????? ?????????????????????)' checked={this.state.form3_buyoptions256==='Indian Colza(?????????????????? ?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions256}/>
                                Indian Colza(?????????????????? ?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-7.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Jamamkhan(?????????????????????)' checked={this.state.form3_buyoptions257==='Jamamkhan(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions257}/>
                                Jamamkhan(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Kartali(?????????????????????)' checked={this.state.form3_buyoptions258==='Kartali(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions258}/>
                                Kartali(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Knool Khol(???????????? ????????????)' checked={this.state.form3_buyoptions259==='Knool Khol(???????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions259}/>
                                Knool Khol(???????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Leafy Vegetable(???????????????????????? ???????????????)' checked={this.state.form3_buyoptions260==='Leafy Vegetable(???????????????????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions260}/>
                                Leafy Vegetable(???????????????????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Little gourd(???????????? ????????????)' checked={this.state.form3_buyoptions261==='Little gourd(???????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions261}/>
                                Little gourd(???????????? ????????????) 
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Long Melon(???????????? ???????????????)' checked={this.state.form3_buyoptions262==='Long Melon(???????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions262}/>
                                Long Melon(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Lotus Sticks(????????? ?????? ???????????????)' checked={this.state.form3_buyoptions263==='Lotus Sticks(????????? ?????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions263}/>
                                Lotus Sticks(????????? ?????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mango(??????) (Raw-Ripe)' checked={this.state.form3_buyoptions264==='Mango(??????) (Raw-Ripe)'}
                                    onChange={this.onChangeform3buyoptions264}/>
                                Mango(??????) (Raw-Ripe)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mushrooms(?????????-????????????)' checked={this.state.form3_buyoptions265==='Mushrooms(?????????-????????????)'}
                                    onChange={this.onChangeform3buyoptions265}/>
                                Mushrooms(?????????-????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Fenugreek(???????????????)' checked={this.state.form3_buyoptions266==='Fenugreek(???????????????)'}
                                    onChange={this.onChangeform3buyoptions266}  />
                                Fenugreek(???????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Mint(??????????????????)' checked={this.state.form3_buyoptions267==='Mint(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions267}/>
                                Mint(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Onion(??????????????????)' checked={this.state.form3_buyoptions268==='Onion(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions268}/>
                                Onion(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Onion Green(??????????????? ?????????)' checked={this.state.form3_buyoptions269==='Onion Green(??????????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions269}/>
                                Onion Green(??????????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Papaya(???????????????) (Raw)' checked={this.state.form3_buyoptions270==='Papaya(???????????????) (Raw)'}
                                    onChange={this.onChangeform3buyoptions270}/>
                                Papaya(???????????????) (Raw)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Peas cod(????????? ?????????)' checked={this.state.form3_buyoptions271==='Peas cod(????????? ?????????)'}
                                    onChange={this.onChangeform3buyoptions271}/>
                                Peas cod(????????? ?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Peas Wet(????????? ????????????)' checked={this.state.form3_buyoptions272==='Peas Wet(????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions272}/>
                                Peas Wet(????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pigeon Pea(????????????)' checked={this.state.form3_buyoptions273==='Pigeon Pea(????????????)'}
                                    onChange={this.onChangecommodities273}/>
                                Pigeon Pea(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pointed gourd(?????????????????? ????????????)' checked={this.state.form3_buyoptions274==='Pointed gourd(?????????????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions274}/>
                                Pointed gourd(?????????????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-11.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Potato(?????????)' checked={this.state.form3_buyoptions275==='Potato(?????????)'}
                                    onChange={this.onChangeform3buyoptions275}/>
                                Potato(?????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Pumpkin(???????????????)' checked={this.state.form3_buyoptions276==='Pumpkin(???????????????)'}
                                    onChange={this.onChangeform3buyoptions276}/>
                                Pumpkin(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Raddish(????????????)' checked={this.state.form3_buyoptions277==='Raddish(????????????)'}
                                    onChange={this.onChangeform3buyoptions277}/>
                                Raddish(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Rat Tail Radish(???????????? ???????????? ????????????)' checked={this.state.form3_buyoptions278==='Rat Tail Radish(???????????? ???????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions278}/>
                                Rat Tail Radish(???????????? ???????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Ridgeguord(????????????)' checked={this.state.form3_buyoptions279==='Ridgeguord(????????????)'}
                                    onChange={this.onChangeform3buyoptions279}/>
                                Ridgeguord(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Round gourd(????????? ????????????)' checked={this.state.form3_buyoptions280==='Round gourd(????????? ????????????)'}
                                    onChange={this.onChangeform3buyoptions280}/>
                                Round gourd(????????? ????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Season Leaves(????????? ???????????????)' checked={this.state.form3_buyoptions281==='Season Leaves(????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions281}/>
                                Season Leaves(????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Snakeguord(????????????????????????)' checked={this.state.form3_buyoptions282==='Snakeguord(????????????????????????)'}
                                    onChange={this.onChangeform3buyoptions282}/>
                                Snakeguord(????????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Spinach(????????????)' checked={this.state.form3_buyoptions283==='Spinach(????????????)'}
                                    onChange={this.onChangeform3buyoptions283}/>
                                Spinach(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sponge gourd(????????????)' checked={this.state.form3_buyoptions284==='Sponge gourd(????????????)'}
                                    onChange={this.onChangeform3buyoptions284}/>
                                Sponge gourd(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Squash(?????????????????????)' checked={this.state.form3_buyoptions285==='Squash(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions285}/>
                                Squash(?????????????????????)
                              </div>
                            </label>
    
                            <label for="second">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Surat Beans(???????????? ???????????????)' checked={this.state.form3_buyoptions286==='Surat Beans(???????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions286}  />
                                Surat Beans(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="third">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sweet Potato(??????????????????)' checked={this.state.form3_buyoptions287==='Sweet Potato(??????????????????)'}
                                    onChange={this.onChangeform3buyoptions287}/>
                                Sweet Potato(??????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Sweet Pumpkin(???????????? ???????????????)' checked={this.state.form3_buyoptions288==='Sweet Pumpkin(???????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions288}/>
                                Sweet Pumpkin(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-9.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tapioca(?????????????????????)' checked={this.state.form3_buyoptions289==='Tapioca(?????????????????????)'}
                                    onChange={this.onChangeform3buyoptions289}/>
                                Tapioca(?????????????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Tomato(???????????????)' checked={this.state.form3_buyoptions290==='Tomato(???????????????)'}
                                    onChange={this.onChangeform3buyoptions290}/>
                                Tomato(???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Turmeric(???????????????) (raw)' checked={this.state.form3_buyoptions291==='Turmeric(???????????????) (raw)'}
                                    onChange={this.onChangeform3buyoptions291}/>
                                Turmeric(???????????????) (raw)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-10.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Turnip(????????????)' checked={this.state.form3_buyoptions292==='Turnip(????????????)'}
                                    onChange={this.onChangeform3buyoptions292}/>
                                Turnip(????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-8.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='White Pumpkin(???????????? ???????????????)' checked={this.state.form3_buyoptions293==='White Pumpkin(???????????? ???????????????)'}
                                    onChange={this.onChangeform3buyoptions293}/>
                                White Pumpkin(???????????? ???????????????)
                              </div>
                            </label>
                            <label for="first">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "-12.5rem",
                                }}
                              >
                                <input type="checkbox" id="first" value='Yam(???????????????)' checked={this.state.form3_buyoptions294==='Yam(???????????????)'}
                                    onChange={this.onChangeform3buyoptions294}/>
                                Yam(???????????????)
                              </div>
                            </label>
                            
                          </div>
                        </div>
                      </form> 

                    
                   
                <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
                  <label htmlFor="Name">
                    City :<br />
                    ????????? :
                  </label>
                  <input
                    style={{ marginLeft: "6.8rem" }}
                    type="text"
                    placeholder="Enter Your City"
                    value={this.state.form3_city}
                    onChange={this.onChangeform3city}
                  />
                </div>
    
                <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
                  <label htmlFor="Name">
                    State :<br />
                    ??????????????? :
                  </label>
                  <input
                    style={{ marginLeft: "6.8rem" }}
                    type="text"
                    placeholder="Enter Your State"
                    value={this.state.form3_state}
                    onChange={this.onChangeform3state}
                  />
                </div>
                <button
                  value='Submit'
                  style={{
                    marginTop: "1rem",
                    padding: "0.5rem 4rem",
                    borderRadius: "7px",
                    border: "none",
                    border: "3px solid #0d4c00",
                  }}
                >
                  Submit
                </button>
              </div>
              </div>
            </div>
            </form>
            < form onSubmit={this.onSubmit4}>
            <div className="inputContainer4">
              {/* <h1>Form4</h1> */}
              <div className="FormDiv2">
                <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
                  <label htmlFor="Name">
                    Name :<br />
                    ????????? :
                  </label>
                  <input
                    style={{ marginLeft: "10.1rem" }}
                    type="text"
                    placeholder="Enter Your Name"
                    value={this.state.form4_name}
                    onChange={this.onChangeform4name}
                  />
                </div>
                <div className="FormDiv8" style={{ marginBottom: "1.5rem" }}>
                  <label htmlFor="Number">
                    Phone Number :<br />
                    ???????????? ????????????:
                  </label>
                  <input
                    style={{ marginLeft: "12.2rem" }}
                    type="number"
                    placeholder="Enter Your Number"
                    name=""
                    id="Number"
                    value={this.state.form4_phoneno}
                    onChange={this.onChangeform4phoneno}
                  />
                </div>
                <div>
                  <form>
                    <div className="multipleSelection">
                      <div className="selectBox" onClick={this.showCheckboxes3}>
                        <select>
                          <option>In Which States do you give your service?</option>
                        </select>
                        <div className="overSelect"></div>
                      </div>
    
                      <div id="checkBoxes3">
                        <label for="first">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-10.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Kanpur" checked={this.state.form4_serviceStates1==='Kanpur'}
                                    onChange={this.onChangeform4serstate1}/>
                            Andaman and Nicobar
                          </div>
                        </label>
    
                        <label for="second">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-10.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Lucknow" checked={this.state.form4_serviceStates2==='Lucknow'}
                                    onChange={this.onChangeform4serstate2}/>
                            Andhra Pradesh
                          </div>
                        </label>
                        <label for="third">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-10.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Ghaziabad" checked={this.state.form4_serviceStates3==='Ghaziabad'}
                                    onChange={this.onChangeform4serstate3}/>
                            Arunanchal Pradesh
                          </div>
                        </label>
                        <label for="fourth">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Jamnagar" checked={this.state.form4_serviceStates4==='Jamnagar'}
                                    onChange={this.onChangeform4serstate4}/>
                            Assam
                          </div>
                        </label>
                        <label for="first">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Bihar" checked={this.state.form4_serviceStates5==='Bihar'}
                                    onChange={this.onChangeform4serstate5}/>
                            Bihar
                          </div>
                        </label>
    
                        <label for="second">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Lucknow" checked={this.state.form4_serviceStates6==='Lucknow'}
                                    onChange={this.onChangeform4serstate6}/>
                            Chandigarh
                          </div>
                        </label>
                        <label for="third">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Ghaziabad" checked={this.state.form4_serviceStates7==='Ghaziabad'}
                                    onChange={this.onChangeform4serstate7}/>
                            Chhatisgarh
                          </div>
                        </label>
                        <label for="fourth">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-9.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Jamnagar" checked={this.state.form4_serviceStates8==='Jamnagar'}
                                    onChange={this.onChangeform4serstate8}/>
                            Dadra and Nagar Haveli
                          </div>
                        </label>
                        <label for="first">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-11.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Kanpur" checked={this.state.form4_serviceStates9==='Kanpur'}
                                    onChange={this.onChangeform4serstate9}/>
                            Daman and Diu
                          </div>
                        </label>
    
                        <label for="second">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Lucknow" checked={this.state.form4_serviceStates10==='Lucknow'}
                                    onChange={this.onChangeform4serstate10}/>
                            Goa
                          </div>
                        </label>
                        <label for="third">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Ghaziabad" checked={this.state.form4_serviceStates11==='Ghaziabad'}
                                    onChange={this.onChangeform4serstate11}/>
                            Gujarat
                          </div>
                        </label>
                        <label for="fourth">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Jamnagar" checked={this.state.form4_serviceStates12==='Jamnagar'}
                                    onChange={this.onChangeform4serstate12}/>
                            Haryana
                          </div>
                        </label>
                        <label for="first">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-10.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Kanpur" checked={this.state.form4_serviceStates13==='Kanpur'}
                                    onChange={this.onChangeform4serstate13}/>
                            Himanchal Pradesh
                          </div>
                        </label>
    
                        <label for="second">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-10.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Lucknow" checked={this.state.form4_serviceStates14==='Lucknow'}
                                    onChange={this.onChangeform4serstate14}/>
                            Jammu and Kashmir
                          </div>
                        </label>
                        <label for="third">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Ghaziabad" checked={this.state.form4_serviceStates15==='Ghaziabad'}
                                    onChange={this.onChangeform4serstate15}/>
                            Jharkhand
                          </div>
                        </label>
                        <label for="fourth">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Jamnagar" checked={this.state.form4_serviceStates16==='Jamnagar'}
                                    onChange={this.onChangeform4serstate16}/>
                            Karnataka
                          </div>
                        </label>
                        <label for="first">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Kanpur" checked={this.state.form4_serviceStates17==='Kanpur'}
                                    onChange={this.onChangeform4serstate17}/>
                            Kerala
                          </div>
                        </label>
    
                        <label for="second">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Lucknow" checked={this.state.form4_serviceStates18==='Lucknow'}
                                    onChange={this.onChangeform4serstate18}/>
                            Lakshadweep
                          </div>
                        </label>
                        <label for="third">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-11.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Ghaziabad" checked={this.state.form4_serviceStates19==='Ghaziabad'}
                                    onChange={this.onChangeform4serstate19}/>
                            Madhya Pradesh
                          </div>
                        </label>
                        <label for="fourth">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-11.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Jamnagar" checked={this.state.form4_serviceStates20==='Jamnagar'}
                                    onChange={this.onChangeform4serstate20}/>
                            Maharashtra
                          </div>
                        </label>
                        <label for="first">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-11.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Kanpur" checked={this.state.form4_serviceStates21==='Kanpur'}
                                    onChange={this.onChangeform4serstate21}/>
                            Manipur
                          </div>
                        </label>
    
                        <label for="second">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Lucknow" checked={this.state.form4_serviceStates22==='Lucknow'}
                                    onChange={this.onChangeform4serstate22}/>
                            Meghalaya
                          </div>
                        </label>
                        <label for="third">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Ghaziabad" checked={this.state.form4_serviceStates23==='Ghaziabad'}
                                    onChange={this.onChangeform4serstate23}/>
                            Mizoram
                          </div>
                        </label>
                        <label for="fourth">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Jamnagar" checked={this.state.form4_serviceStates24==='Jamnagar'}
                                    onChange={this.onChangeform4serstate24}/>
                            Nagaland
                          </div>
                        </label>
                        <label for="first">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Kanpur" checked={this.state.form4_serviceStates25==='Kanpur'}
                                    onChange={this.onChangeform4serstate25}/>
                            NCT of Delhi
                          </div>
                        </label>
    
                        <label for="second">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-13.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Lucknow" checked={this.state.form4_serviceStates26==='Lucknow'}
                                    onChange={this.onChangeform4serstate26}/>
                            Odisha
                          </div>
                        </label>
                        <label for="third">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Ghaziabad" checked={this.state.form4_serviceStates27==='Ghaziabad'}
                                    onChange={this.onChangeform4serstate27}/>
                            Puducherry
                          </div>
                        </label>
                        <label for="fourth">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Jamnagar" checked={this.state.form4_serviceStates28==='Jamnagar'}
                                    onChange={this.onChangeform4serstate28}/>
                            Punjab
                          </div>
                        </label>
                        <label for="first">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Kanpur" checked={this.state.form4_serviceStates29==='Kanpur'}
                                    onChange={this.onChangeform4serstate29}/>
                            Rajasthan
                          </div>
                        </label>
    
                        <label for="second">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-13.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Lucknow" checked={this.state.form4_serviceStates30==='Lucknow'}
                                    onChange={this.onChangeform4serstate30}/>
                            Sikkim
                          </div>
                        </label>
                        <label for="third">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Ghaziabad" checked={this.state.form4_serviceStates31==='Ghaziabad'}
                                    onChange={this.onChangeform4serstate31}/>
                            Tamil Nadu
                          </div>
                        </label>
                        <label for="fourth">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Jamnagar" checked={this.state.form4_serviceStates32==='Jamnagar'}
                                    onChange={this.onChangeform4serstate32}/>
                            Telangana
                          </div>
                        </label>
                        <label for="first">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-13.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Kanpur" checked={this.state.form4_serviceStates33==='Kanpur'}
                                    onChange={this.onChangeform4serstate33}/>
                            Tripura
                          </div>
                        </label>
    
                        <label for="second">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Lucknow" checked={this.state.form4_serviceStates34==='Lucknow'}
                                    onChange={this.onChangeform4serstate34}/>
                            Uttar Pradesh
                          </div>
                        </label>
                        <label for="third">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-11.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Ghaziabad" checked={this.state.form4_serviceStates35==='Ghaziabad'}
                                    onChange={this.onChangeform4serstate35}/>
                            Uttarakhand
                          </div>
                        </label>
                        <label for="third">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "-12.5rem",
                            }}
                          >
                            <input type="checkbox" id="first" value="Ghaziabad" checked={this.state.form4_serviceStates35==='Ghaziabad'}
                                    onChange={this.onChangeform4serstate35}/>
                            West Bengal
                          </div>
                        </label>
                        
                      </div>
                    </div>
                  </form>
                </div>
                <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
                  <label htmlFor="Name">
                    Name of your Transportation Company :<br />
                    ???????????? ?????????????????? ??????????????? ?????? ????????? :
                  </label>
                  <input type="text" placeholder="Enter Your Organisation Name" value={this.state.form4_transportationCompany}
                    onChange={this.onChangeform4transcomp}/>
                </div>
                <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
                  <label htmlFor="Name">
                    City :<br />
                    ????????? :
                  </label>
                  <input
                    style={{ marginLeft: "9.9rem" }}
                    type="text"
                    placeholder="Enter Your City"
                    value={this.state.form4_city}
                    onChange={this.onChangeform4city}
                  />
                </div>
                <div className="FormDiv7" style={{ marginBottom: "0.5rem" }}>
                  <label htmlFor="Name">
                    State :<br />
                    ??????????????? :
                  </label>
                  <input
                    style={{ marginLeft: "9.8rem" }}
                    type="text"
                    placeholder="Enter Your State"
                    value={this.state.form4_state}
                    onChange={this.onChangeform4state}
                  />
                </div>
                <button
                  value='Submit'
                  style={{
                    marginTop: "1rem",
                    padding: "0.5rem 4rem",
                    borderRadius: "7px",
                    border: "none",
                    border: "3px solid #0d4c00",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
            </form>
            {/* <div classNameName="innerLoginDiv">
            <h1>I am a....</h1>
            <div classNameName="LoginCards">
              <a href="#">
                <div onClick={showDiv} classNameName="Card1">
                  <h2>Produce Buyer</h2>
                  <p>I am interested in sourcing products for my business.</p>
                </div>
              </a>
              <a href="#">
                <div onClick={showDiv} classNameName="Card2">
                  <h2>Supplier</h2>
                  <p>I am interested in Selling products</p>
                </div>
              </a>
              <a href="#">
                <div onClick={showDiv} classNameName="Card3">
                  <h2>Individual</h2>
                  <p>I am interested in learning more about Agrofam</p>
                </div>
              </a>
            </div>
          </div> */}
    
            <Footer></Footer>
          </div>
          //{" "}
        </div>
      );
    };

    }

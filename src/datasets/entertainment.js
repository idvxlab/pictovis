const entertainment = [
    {"Date":"2015","Category":"Electronics","Counts":"1020000","Season":"spring","Sex":"Man","Age":"Young","Relaxation":"804.7957928","Satisfaction":"92.20288174"},
    {"Date":"2016","Category":"Electronics","Counts":"892000","Season":"spring","Sex":"Man","Age":"Young","Relaxation":"229.8418344","Satisfaction":"93.26722153"},
    {"Date":"2017","Category":"Electronics","Counts":"693000","Season":"spring","Sex":"Man","Age":"Young","Relaxation":"571.8487973","Satisfaction":"45.33338013"},
    {"Date":"2018","Category":"Food","Counts":"641000","Season":"spring","Sex":"Man","Age":"Young","Relaxation":"949.7333884","Satisfaction":"18.66050492"},
    {"Date":"2018","Category":"Electronics","Counts":"641000","Season":"spring","Sex":"Man","Age":"Young","Relaxation":"949.7333884","Satisfaction":"18.66050492"},
    {"Date":"2019","Category":"Electronics","Counts":"571000","Season":"spring","Sex":"Man","Age":"Young","Relaxation":"165.6290775","Satisfaction":"10.3714364"},
    {"Date":"2015","Category":"Electronics","Counts":"565000","Season":"spring","Sex":"Man","Age":"Young","Relaxation":"153.5627927","Satisfaction":"74.82443385"},
    {"Date":"2016","Category":"Media","Counts":"518000","Season":"spring","Sex":"Man","Age":"Young","Relaxation":"882.831172","Satisfaction":"79.73281841"},
    {"Date":"2017","Category":"Electronics","Counts":"506000","Season":"spring","Sex":"Man","Age":"Young","Relaxation":"448.5982651","Satisfaction":"37.18402082"},
    {"Date":"2018","Category":"Electronics","Counts":"496000","Season":"spring","Sex":"Man","Age":"Young","Relaxation":"618.0740018","Satisfaction":"74.87875015"},
    {"Date":"2019","Category":"Electronics","Counts":"481000","Season":"spring","Sex":"Man","Age":"Young","Relaxation":"527.7609812","Satisfaction":"79.55622374"},
    {"Date":"2015","Category":"Electronics","Counts":"475000","Season":"spring","Sex":"Woman","Age":"Young","Relaxation":"46.35846492","Satisfaction":"67.5143455"},
    {"Date":"2016","Category":"Electronics","Counts":"471000","Season":"spring","Sex":"Woman","Age":"Young","Relaxation":"973.4467888","Satisfaction":"86.19411497"},
    {"Date":"2017","Category":"Home","Counts":"456000","Season":"summer","Sex":"Woman","Age":"Young","Relaxation":"61.15872314","Satisfaction":"35.79659914"},
    {"Date":"2018","Category":"Electronics","Counts":"447000","Season":"summer","Sex":"Woman","Age":"Young","Relaxation":"82.85617925","Satisfaction":"82.59473669"},
    {"Date":"2019","Category":"Electronics","Counts":"445000","Season":"summer","Sex":"Woman","Age":"Young","Relaxation":"986.2858484","Satisfaction":"12.93918056"},
    {"Date":"2015","Category":"Home","Counts":"422000","Season":"summer","Sex":"Woman","Age":"Young","Relaxation":"86.68042039","Satisfaction":"46.90836849"},
    {"Date":"2016","Category":"Electronics","Counts":"412000","Season":"summer","Sex":"Woman","Age":"Young","Relaxation":"946.5213199","Satisfaction":"42.49787078"},
    {"Date":"2017","Category":"Home","Counts":"404000","Season":"summer","Sex":"Woman","Age":"Young","Relaxation":"234.6130338","Satisfaction":"55.97152935"},
    {"Date":"2018","Category":"Electronics","Counts":"403000","Season":"summer","Sex":"Woman","Age":"Young","Relaxation":"797.0431905","Satisfaction":"89.10704012"},
    {"Date":"2019","Category":"Electronics","Counts":"402000","Season":"summer","Sex":"Woman","Age":"Young","Relaxation":"488.0936443","Satisfaction":"66.16997756"},
    {"Date":"2015","Category":"Home","Counts":"392000","Season":"summer","Sex":"Man","Age":"Young","Relaxation":"184.1232186","Satisfaction":"53.20065916"},
    {"Date":"2016","Category":"Electronics","Counts":"388000","Season":"summer","Sex":"Man","Age":"Young","Relaxation":"762.3402502","Satisfaction":"43.00977264"},
    {"Date":"2017","Category":"Electronics","Counts":"385000","Season":"summer","Sex":"Man","Age":"Young","Relaxation":"189.9891569","Satisfaction":"46.33627625"},
    {"Date":"2018","Category":"Electronics","Counts":"376000","Season":"summer","Sex":"Man","Age":"Young","Relaxation":"377.5891519","Satisfaction":"72.51116129"},
    {"Date":"2019","Category":"Electronics","Counts":"370000","Season":"summer","Sex":"Man","Age":"Young","Relaxation":"674.5315194","Satisfaction":"74.72681857"},
    {"Date":"2015","Category":"Electronics","Counts":"362000","Season":"summer","Sex":"Man","Age":"Young","Relaxation":"322.8662111","Satisfaction":"63.11773488"},
    {"Date":"2016","Category":"Home","Counts":"357000","Season":"summer","Sex":"Man","Age":"Young","Relaxation":"132.3889744","Satisfaction":"98.49615911"},
    {"Date":"2017","Category":"Home","Counts":"349000","Season":"autumn","Sex":"Man","Age":"Young","Relaxation":"888.7672531","Satisfaction":"41.2245725"},
    {"Date":"2018","Category":"Home","Counts":"332000","Season":"autumn","Sex":"Man","Age":"Young","Relaxation":"720.1057072","Satisfaction":"31.51120104"},
    {"Date":"2019","Category":"Home","Counts":"322000","Season":"autumn","Sex":"Man","Age":"Young","Relaxation":"309.846846","Satisfaction":"65.30830644"},
    {"Date":"2015","Category":"Electronics","Counts":"319000","Season":"autumn","Sex":"Man","Age":"Young","Relaxation":"377.1026271","Satisfaction":"19.2298935"},
    {"Date":"2016","Category":"Home","Counts":"319000","Season":"autumn","Sex":"Man","Age":"Young","Relaxation":"215.2598973","Satisfaction":"75.62118138"},
    {"Date":"2017","Category":"Misc","Counts":"314000","Season":"autumn","Sex":"Man","Age":"Young","Relaxation":"911.0604968","Satisfaction":"81.01784183"},
    {"Date":"2018","Category":"Home","Counts":"314000","Season":"autumn","Sex":"Man","Age":"Young","Relaxation":"475.9660002","Satisfaction":"94.23037307"},
    {"Date":"2019","Category":"Clothing","Counts":"312000","Season":"autumn","Sex":"Man","Age":"Young","Relaxation":"160.6684837","Satisfaction":"52.45798456"},
    {"Date":"2015","Category":"Electronics","Counts":"306000","Season":"autumn","Sex":"Man","Age":"Young","Relaxation":"277.1729105","Satisfaction":"73.33487324"},
    {"Date":"2016","Category":"Misc","Counts":"301000","Season":"autumn","Sex":"Man","Age":"Young","Relaxation":"686.8168165","Satisfaction":"80.84092947"},
    {"Date":"2017","Category":"Electronics","Counts":"301000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"449.9924078","Satisfaction":"84.82254728"},
    {"Date":"2018","Category":"Home","Counts":"299000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"516.919657","Satisfaction":"67.75761529"},
    {"Date":"2019","Category":"Electronics","Counts":"287000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"758.4689775","Satisfaction":"31.38803061"},
    {"Date":"2015","Category":"Electronics","Counts":"284000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"768.9447763","Satisfaction":"41.56778355"},
    {"Date":"2016","Category":"Home","Counts":"282000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"386.9718855","Satisfaction":"44.77048396"},
    {"Date":"2017","Category":"Electronics","Counts":"277000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"154.4674183","Satisfaction":"41.31444485"},
    {"Date":"2018","Category":"Electronics","Counts":"276000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"421.9500496","Satisfaction":"6.364068765"},
    {"Date":"2019","Category":"Misc","Counts":"276000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"727.228936","Satisfaction":"72.26606194"},
    {"Date":"2015","Category":"Electronics","Counts":"275000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"186.0924976","Satisfaction":"50.36534389"},
    {"Date":"2016","Category":"Electronics","Counts":"272000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"504.0362007","Satisfaction":"61.83179383"},
    {"Date":"2017","Category":"Electronics","Counts":"270000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"882.7279593","Satisfaction":"19.09622015"},
    {"Date":"2018","Category":"Electronics","Counts":"269000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"996.3283507","Satisfaction":"24.16267416"},
    {"Date":"2019","Category":"Electronics","Counts":"269000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"304.6493678","Satisfaction":"59.5746213"},
    {"Date":"2015","Category":"Electronics","Counts":"262000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"317.7096323","Satisfaction":"84.10734355"},
    {"Date":"2016","Category":"Food","Counts":"261000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"134.82022","Satisfaction":"27.60661448"},
    {"Date":"2017","Category":"Misc","Counts":"257000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"321.1246524","Satisfaction":"60.39250027"},
    {"Date":"2018","Category":"Electronics","Counts":"257000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"870.8376531","Satisfaction":"28.93863931"},
    {"Date":"2019","Category":"Electronics","Counts":"257000","Season":"autumn","Sex":"Woman","Age":"Middle","Relaxation":"939.3453971","Satisfaction":"48.88892606"},
    {"Date":"2015","Category":"Electronics","Counts":"256000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"942.8306952","Satisfaction":"99.19470348"},
    {"Date":"2016","Category":"Clothing","Counts":"255000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"993.8327275","Satisfaction":"27.39811981"},
    {"Date":"2017","Category":"Home","Counts":"255000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"312.1164925","Satisfaction":"47.48311126"},
    {"Date":"2018","Category":"Misc","Counts":"254000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"140.8062044","Satisfaction":"56.17444232"},
    {"Date":"2019","Category":"Media","Counts":"253000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"696.7222702","Satisfaction":"1.459929646"},
    {"Date":"2015","Category":"Electronics","Counts":"249000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"836.580809","Satisfaction":"89.6775722"},
    {"Date":"2016","Category":"Misc","Counts":"248000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"351.4483961","Satisfaction":"85.75570313"},
    {"Date":"2017","Category":"Electronics","Counts":"247000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"751.0392771","Satisfaction":"4.098852913"},
    {"Date":"2018","Category":"Electronics","Counts":"247000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"143.6817996","Satisfaction":"39.3259522"},
    {"Date":"2019","Category":"Media","Counts":"246000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"992.3739383","Satisfaction":"77.12754692"},
    {"Date":"2015","Category":"Misc","Counts":"243000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"241.0211953","Satisfaction":"79.35895355"},
    {"Date":"2016","Category":"Electronics","Counts":"240000","Season":"autumn","Sex":"Man","Age":"Middle","Relaxation":"688.4046213","Satisfaction":"29.4965627"},
    {"Date":"2017","Category":"Misc","Counts":"238000","Season":"winter","Sex":"Woman","Age":"Middle","Relaxation":"117.7178357","Satisfaction":"8.869214745"},
    {"Date":"2018","Category":"Electronics","Counts":"238000","Season":"winter","Sex":"Woman","Age":"Middle","Relaxation":"275.3127168","Satisfaction":"76.63933182"},
    {"Date":"2019","Category":"Media","Counts":"237000","Season":"winter","Sex":"Woman","Age":"Middle","Relaxation":"398.3057328","Satisfaction":"45.82303723"},
    {"Date":"2015","Category":"Home","Counts":"237000","Season":"winter","Sex":"Woman","Age":"Middle","Relaxation":"832.5545094","Satisfaction":"49.06054713"},
    {"Date":"2016","Category":"Electronics","Counts":"236000","Season":"winter","Sex":"Woman","Age":"Middle","Relaxation":"608.4111139","Satisfaction":"70.18207711"},
    {"Date":"2017","Category":"Media","Counts":"235000","Season":"winter","Sex":"Woman","Age":"Middle","Relaxation":"466.2097342","Satisfaction":"69.23600271"},
    {"Date":"2018","Category":"Electronics","Counts":"232000","Season":"winter","Sex":"Woman","Age":"Middle","Relaxation":"629.4029957","Satisfaction":"60.01443678"},
    {"Date":"2019","Category":"Home","Counts":"232000","Season":"winter","Sex":"Woman","Age":"Middle","Relaxation":"395.4128285","Satisfaction":"52.78785551"},
    {"Date":"2015","Category":"Media","Counts":"231000","Season":"winter","Sex":"Woman","Age":"Middle","Relaxation":"754.8341728","Satisfaction":"17.4561838"},
    {"Date":"2016","Category":"Home","Counts":"229000","Season":"winter","Sex":"Woman","Age":"Middle","Relaxation":"305.7779567","Satisfaction":"92.48735844"},
    {"Date":"2017","Category":"Media","Counts":"224000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"675.7676407","Satisfaction":"5.851876839"},
    {"Date":"2018","Category":"Misc","Counts":"222000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"947.289242","Satisfaction":"18.95313861"},
    {"Date":"2019","Category":"Home","Counts":"216000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"868.4314833","Satisfaction":"9.289437342"},
    {"Date":"2015","Category":"Food","Counts":"216000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"682.0450818","Satisfaction":"56.12464927"},
    {"Date":"2016","Category":"Clothing","Counts":"213000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"185.4859367","Satisfaction":"84.35246361"},
    {"Date":"2017","Category":"Media","Counts":"211000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"410.7821735","Satisfaction":"26.07403438"},
    {"Date":"2018","Category":"Electronics","Counts":"209000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"725.1185194","Satisfaction":"46.60973492"},
    {"Date":"2019","Category":"Misc","Counts":"207000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"362.2741924","Satisfaction":"37.29912248"},
    {"Date":"2015","Category":"Home","Counts":"205000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"617.2447635","Satisfaction":"78.58996324"},
    {"Date":"2016","Category":"Home","Counts":"203000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"427.8684735","Satisfaction":"56.2449347"},
    {"Date":"2017","Category":"Home","Counts":"203000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"289.0593882","Satisfaction":"42.573032"},
    {"Date":"2018","Category":"Misc","Counts":"202000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"319.4506617","Satisfaction":"34.16897656"},
    {"Date":"2019","Category":"Electronics","Counts":"202000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"84.78751474","Satisfaction":"62.60294934"},
    {"Date":"2015","Category":"Misc","Counts":"202000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"425.7793691","Satisfaction":"32.56624035"},
    {"Date":"2016","Category":"Home","Counts":"200000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"208.0703576","Satisfaction":"9.587073169"},
    {"Date":"2017","Category":"Electronics","Counts":"197000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"245.5355057","Satisfaction":"31.96344252"},
    {"Date":"2018","Category":"Electronics","Counts":"197000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"972.755079","Satisfaction":"33.07489223"},
    {"Date":"2019","Category":"Home","Counts":"196000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"214.5286041","Satisfaction":"10.77151213"},
    {"Date":"2015","Category":"Electronics","Counts":"196000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"792.005746","Satisfaction":"61.10280119"},
    {"Date":"2016","Category":"Electronics","Counts":"195000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"194.1170197","Satisfaction":"69.18265754"},
    {"Date":"2017","Category":"Misc","Counts":"195000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"227.5059997","Satisfaction":"1.754880453"},
    {"Date":"2018","Category":"Media","Counts":"195000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"39.49340108","Satisfaction":"62.81277271"},
    {"Date":"2019","Category":"Electronics","Counts":"194000","Season":"winter","Sex":"Woman","Age":"Old","Relaxation":"0.149558548","Satisfaction":"45.76797212"}
];

export default entertainment;

//var response_data = JSON.parse('{{ response | tojson | safe }}');
//var part_liv = response_data.particulares_livianos

var particulares_livianos = response_data

var part_liv_2016 = particulares_livianos.filter(x => { return x.anio === 2016 })
var part_liv_2017 = particulares_livianos.filter(x => { return x.anio === 2017 })
var part_liv_2018 = particulares_livianos.filter(x => { return x.anio === 2018 })
var part_liv_2019 = particulares_livianos.filter(x => { return x.anio === 2019 })
var part_liv_2020 = particulares_livianos.filter(x => { return x.anio === 2020 })







//function range(start, end) {
//    var ans = [];
//    for (let i = start; i <= end; i++) {
//        ans.push(i);
//    }
//    return ans;
//};

//var x = d3.scaleLinear()
//    .domain([10, 130])
//    .range([0, width]);
//console.log(x(130))

//svg.append("g")
//    .attr("transform", "translate(0," + height + ")")
//    .call(d3.axisBottom(x));



var svg = d3.select("#ordinal_demo")
    .append("svg")
    .attr("width", 1000)
    .attr("height", 300)

var x = d3.scaleBand()
    .domain(["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciemebre"])
    .range([100, 800])
    .padding([0.8])

svg
    .append("g")
    .attr("transform", "translate(0,250)")
    .call(d3.axisBottom(x))

var part_liv_ene_2016 = part_liv_2016[0].cda_13 + part_liv_2016[0].cda_80 + part_liv_2016[0].cda_170 + part_liv_2016[0].cda_celta



svg
    .append("rect")
    .attr("x", x("Enero"))
    .attr("y", 100)
    .attr("height", 150)
    .attr("width", x.bandwidth())
    .style("fill", "pink")
    .style("opacity", 0.5)



console.log(part_liv_ene_2016)


import colorTable from "../tables/colorTable.json" assert {type: "json"};
import weaponTable from "../tables/weaponTable.json" assert {type: "json"};
import chConfig from "../tables/chartConfigs.json" assert {type: "json"};

export function buildKdaChart(legendData, i){
    
    new Chart("KDA #"+i, {
        type: chConfig.type,
        data: {
          labels: ['Kills', 'Deaths', 'Team Kills', 'Suicides'],
          datasets: [{
            data: [legendData.kos, legendData.falls, legendData.teamkos, legendData.suicides],
            backgroundColor: [colorTable.g4.kos, colorTable.g4.falls, colorTable.g4.tks, colorTable.g4.suicides]
          }]
        },
        options: {
          labels: {
            align: chConfig.options.labels.align,
            display: chConfig.options.labels.display,
            position: chConfig.options.labels.position
          },
          responsive: chConfig.options.responsive,
          title: {
            display: chConfig.options.title.display,
            text: "KDA"
          }
        }
      });

}

export function buildDmgChart(legendData, i){
    
    new Chart("Damage Distribution #"+i, {
        type: chConfig.type,
        data: {
          labels: ['Damage Delt', 'Damage Taken'],
          datasets: [{
            data: [legendData.damagedealt, legendData.damagetaken],
            backgroundColor: [colorTable.g2.main, colorTable.g2.off]
          }]
        },
        options: {
          labels: {
            align: chConfig.options.labels.align,
            display: chConfig.options.labels.display,
            position: chConfig.options.labels.position
          },
          responsive: chConfig.options.responsive,
          title: {
            display: chConfig.options.title.display,
            text: "Damage Distribution"
          }
        }
      });

}

export function buildWeaponDmgChart(legendData, i){
    
    new Chart("Weapon Damage Distribution #"+i, {
        type: chConfig.type,
        data: {
          labels: [weaponTable[legendData.legend_name_key].main, weaponTable[legendData.legend_name_key].off, 'Unnarmed', 'Gadgets', 'Thrown Item'],
          datasets: [{
            data: [legendData.damageweaponone, legendData.damageweapontwo, legendData.damageunarmed, legendData.damagegadgets, legendData.damagethrownitem],
            backgroundColor: [colorTable.g5.main, colorTable.g5.off, colorTable.g5.unarmed, colorTable.g5.gadget, colorTable.g5.item]
          }]
        },
        options: {
          labels: {
            align: chConfig.options.labels.align,
            display: chConfig.options.labels.display,
            position: chConfig.options.labels.position
          },
          responsive: chConfig.options.responsive,
          title: {
            display: chConfig.options.title.display,
            text: "Weapon Damage Distribution"
          }
        }
      });

}

export function buildKosChart(legendData, i){
    
    new Chart("Weapon KO Distribution #"+i, {
        type: chConfig.type,
        data: {
          labels: [weaponTable[legendData.legend_name_key].main, weaponTable[legendData.legend_name_key].off, 'Unnarmed', 'Gadgets', 'Thrown Item'],
          datasets: [{
            data: [legendData.koweaponone, legendData.koweapontwo, legendData.kounarmed, legendData.kogadgets, legendData.kothrownitem],
            backgroundColor: [colorTable.g5.main, colorTable.g5.off, colorTable.g5.unarmed, colorTable.g5.gadget, colorTable.g5.item]
          }]
        },
        options: {
          labels: {
            align: chConfig.options.labels.align,
            display: chConfig.options.labels.display,
            position: chConfig.options.labels.position
          },
          responsive: chConfig.options.responsive,
          title: {
            display: chConfig.options.title.display,
            text: "Weapon KO Distribution"
          }
        }
      });

}

export function buildHeldWeaponChart(legendData, i){
  
  new Chart("Weapon Holdtime Distribution #"+i, {
    type: chConfig.type,
    data: {
      labels: [weaponTable[legendData.legend_name_key].main, weaponTable[legendData.legend_name_key].off, 'Unarmed'],
      datasets: [{
        data: [legendData.timeheldweaponone, legendData.timeheldweapontwo, legendData.matchtime-legendData.timeheldweaponone - legendData.timeheldweapontwo],
        backgroundColor: [colorTable.g3.w1, colorTable.g3.w2, colorTable.g3.w0]
      }]
    },
    options: {
      labels: {
        align: chConfig.options.labels.align,
        display: chConfig.options.labels.display,
        position: chConfig.options.labels.position
      },
      responsive: chConfig.options.responsive,
      title: {
        display: chConfig.options.title.display,
        text: "Weapon Holdtime Distribution"
      }
    }
  });

}
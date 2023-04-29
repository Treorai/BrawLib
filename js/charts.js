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
          plugins: {
            legend: {
              align: chConfig.options.labels.align,
              display: chConfig.options.labels.display,
              position: chConfig.options.labels.position
            },
            title: {
              display: chConfig.options.title.display,
              text: "KDA"
            }
          },
          responsive: chConfig.options.responsive
        }
      });

}

export function buildWeaponDmgChart(legendData, i){
    
    new Chart("Weapon Damage Distribution #"+i, {
        type: chConfig.type,
        data: {
          labels: [weaponTable[legendData.legend_name_key].main, weaponTable[legendData.legend_name_key].off, 'Unarmed', 'Gadgets', 'Thrown Item'],
          datasets: [{
            data: [legendData.damageweaponone, legendData.damageweapontwo, legendData.damageunarmed, legendData.damagegadgets, legendData.damagethrownitem],
            backgroundColor: [colorTable.g5.main, colorTable.g5.off, colorTable.g5.unarmed, colorTable.g5.gadget, colorTable.g5.item]
          }]
        },
        options: {
          plugins: {
            legend: {
              align: chConfig.options.labels.align,
              display: chConfig.options.labels.display,
              position: chConfig.options.labels.position
            },
            title: {
              display: chConfig.options.title.display,
              text: "Weapon Damage"
            }
          },
          responsive: chConfig.options.responsive
        }
      });

}

export function buildKosChart(legendData, i){
    
    new Chart("Weapon KO Distribution #"+i, {
        type: chConfig.type,
        data: {
          labels: [weaponTable[legendData.legend_name_key].main, weaponTable[legendData.legend_name_key].off, 'Unarmed', 'Gadgets', 'Thrown Item'],
          datasets: [{
            data: [legendData.koweaponone, legendData.koweapontwo, legendData.kounarmed, legendData.kogadgets, legendData.kothrownitem],
            backgroundColor: [colorTable.g5.main, colorTable.g5.off, colorTable.g5.unarmed, colorTable.g5.gadget, colorTable.g5.item]
          }]
        },
        options: {
          plugins: {
            title: {
              display: chConfig.options.title.display,
              text: "Weapon KO"
            },
            legend: {
              display: chConfig.options.labels.display,
              align: chConfig.options.labels.align,
              position: chConfig.options.labels.position
            }
          },
          responsive: chConfig.options.responsive
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
        backgroundColor: [colorTable.g5.main, colorTable.g5.off, colorTable.g5.unarmed]
      }]
    },
    options: {
      plugins: {
        legend: {
          align: chConfig.options.labels.align,
          display: chConfig.options.labels.display,
          position: chConfig.options.labels.position
        },
        title: {
          display: chConfig.options.title.display,
          text: "Weapon Holdtime"
        }
      },
      responsive: chConfig.options.responsive
    }
  });

}
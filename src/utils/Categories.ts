import food from '../assets/food.png';
import home_appliance from '../assets/home_appliance.png';
import electronics from '../assets/electronics.png';
import derivative from '../assets/derivative.png';
import materials from '../assets/materials.png';
import workplace_safety from '../assets/workplace_safety.png';
import surveillance from '../assets/surveillance.png';
import vehicle from '../assets/vehicle.png';

export const DATA = [
    {
      id: 'Hamburger',
      img: food,
    },
    {
      id: 'Home Appliance',
      img: home_appliance,
    },
    {
      id: 'Electronics',
      img: electronics,
    },
    {
      id: 'Derivative',
      img: derivative,
    },
    {
      id: 'Materials',
      img: materials,
    },
    {
      id: 'Workplace Safety',
      img: workplace_safety,
    },
    {
      id: 'Surveillance',
      img: surveillance,
    },
    {
      id: 'Vehicle',
      img: vehicle,
    },
];

export function GetIconsCategory (param:string) {
    switch (param) {
        case 'Home Appliance': return home_appliance;
        case 'Electronics': return electronics;
        case 'Derivative': return derivative;
        case 'Materials': return materials;
        case 'Workplace Safety': return workplace_safety;
        case 'Surveillance': return surveillance;
        case 'Vehicle': return vehicle;
        default: return food;
    }
}
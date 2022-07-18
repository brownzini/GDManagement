import food from '../assets/food.png';
import home_appliance from '../assets/home_appliance.png';
import electronics from '../assets/electronics.png';
import derivative from '../assets/derivative.png';
import materials from '../assets/materials.png';
import workplace_safety from '../assets/workplace_safety.png';
import surveillance from '../assets/surveillance.png';
import vehicle from '../assets/vehicle.png';

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

export function GetColorCategory (param:string) {
  switch (param) {
      case 'Home Appliance': return '#975FFF';
      case 'Electronics': return '#FF8555';
      case 'Derivative': return '#576EFE';
      case 'Materials': return '#35E3AF';
      case 'Workplace Safety': return '#55C5FE';
      case 'Surveillance': return '#FF0F0F';
      case 'Vehicle': return '#FFD90F';
      default: return '#FF21DB';
  }
}
// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
    switch(role){
      case 'ceo':console.log('2200');
      break;
      case 'manager':console.log('1800');
      break;
      case 'cto':console.log('1800');
      break;
      case 'developer': console.log('1500');
      break;
      default:
        console.log('Esto es 1000')
    }
  }
  
  const ceoSalary = calculateSalary('developer');
  const managerSalary = calculateSalary('manager');
  const ctoSalary = calculateSalary('cto');
  const developerSalary = calculateSalary('developer');
  const otherSalary = calculateSalary('other');
  
  
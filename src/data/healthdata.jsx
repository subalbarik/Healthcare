
import  lungs from '../assets/lungs.jpg'
import  teeth from '../assets/teeth.jpg'
import  bone from "../assets/bone.jpg"

export const anatomyIndicators = [
  {
    label: 'Healthy Heart',
    status: 'Healthy',
    top: '20%',
    left: '45%'
  },
  {
    label: 'Lungs',
    status: 'Critical',
    top: '30%',
    left: '43%'
  },
  {
    label: 'Teeth',
    status: 'Healthy',
    top: '10%',
    left: '47%'
  },
  {
    label: 'Bone',
    status: 'Warning',
    top: '60%',
    left: '50%'
  }
];

export const healthStatusCards = [
  {
    image: lungs,
    title: 'Lungs',
    date: '2024-05-01',
    status: 'Critical'
  },
  {
    image: teeth,
    title: 'Teeth',
    date: '2024-04-10',
    status: 'Healthy'
  },
  {
    image: bone,
    title: 'Bone',
    date: '2024-05-15',
    status: 'Warning'
  }
];

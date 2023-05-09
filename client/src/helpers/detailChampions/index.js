import highDifficultyImage from '../../assets/Dificultad/alta.PNG';
import mediumDifficultyImage from '../../assets/Dificultad/moderada.PNG';
import lowDifficultyImage from '../../assets/Dificultad/baja.PNG';
import assassinRoleImage from '../../assets/Roles/asesino.png';
import fighterRoleImage from '../../assets/Roles/luchador.png';
import mageRoleImage from '../../assets/Roles/mago.png';
import marksmanRoleImage from '../../assets/Roles/tirador.png';
import supportRoleImage from '../../assets/Roles/soporte.png';
import tankRoleImage from '../../assets/Roles/tanque.png';

export const getDifficultyImage = (difficulty) => {
  if (difficulty === 'ALTA') {
    return highDifficultyImage;
  } else if (difficulty === 'MODERADA') {
    return mediumDifficultyImage;
  } else {
    return lowDifficultyImage;
  }
};

export const getRoleImage = (role) => {
  if (role === 'TIRADOR') {
    return marksmanRoleImage;
  } else if (role === 'SOPORTE') {
    return supportRoleImage;
  } else if (role === 'TANQUE') {
    return tankRoleImage;
  } else if (role === 'ASESINO') {
    return assassinRoleImage;
  } else if (role === 'MAGO') {
    return mageRoleImage;
  } else {
    return fighterRoleImage;
  }
};

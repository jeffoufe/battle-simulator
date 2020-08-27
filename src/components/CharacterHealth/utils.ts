export const getHealthColor = (health: number) => {
    if (health > 70) {
        return 'green';
    }
    if (health > 30) {
        return 'orange';
    } 
    return 'red';
}
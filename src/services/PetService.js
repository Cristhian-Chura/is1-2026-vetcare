// Valida que la mascota exista. El módulo de Gestión de Mascotas (RF-004/RF-005)
// no es parte de esta rebanada; aquí se deja una validación mínima y honesta
// (no vacía) para no bloquear la construcción de POST /citas.
class PetService {
  async mascotaValida(mascotaId) {
    return typeof mascotaId === 'string' && mascotaId.trim().length > 0;
  }
}

module.exports = { PetService };

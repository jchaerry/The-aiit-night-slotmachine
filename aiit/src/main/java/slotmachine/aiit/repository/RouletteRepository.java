package slotmachine.aiit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import slotmachine.aiit.domain.Roulette;

import java.util.List;

@Repository
public interface RouletteRepository extends JpaRepository<Roulette, Long> {
    List<Roulette> findByIsDrawnFalse();

}

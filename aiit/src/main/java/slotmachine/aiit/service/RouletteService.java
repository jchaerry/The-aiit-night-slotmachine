package slotmachine.aiit.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import slotmachine.aiit.domain.Roulette;
import slotmachine.aiit.dto.RouletteResponseDto;
import slotmachine.aiit.dto.Status;
import slotmachine.aiit.repository.RouletteRepository;

import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class RouletteService {

    private final RouletteRepository rouletteRepository;
    private final Random random = new Random();

    @Transactional
    public RouletteResponseDto spinRoulette() {
        List<Roulette> nonWinners = rouletteRepository.findByIsDrawnFalse();

        if (nonWinners.isEmpty()) {
            return new RouletteResponseDto(Status.ERROR, null);
        }

        Roulette winner = selectRandomWinner(nonWinners);
        markAttendanceAsDrawn(winner);

        String winnerId = winner.getUserId();

        return new RouletteResponseDto(Status.SUCCESS, winnerId);
    }

    private Roulette selectRandomWinner(List<Roulette> roulettes) {
        int index = random.nextInt(roulettes.size());
        return roulettes.get(index);
    }

    private void markAttendanceAsDrawn(Roulette winner) {
        winner.updateIsDrawn(true);
    }
}

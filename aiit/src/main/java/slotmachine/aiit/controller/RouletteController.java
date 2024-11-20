package slotmachine.aiit.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import slotmachine.aiit.dto.RouletteResponseDto;
import slotmachine.aiit.dto.Status;
import slotmachine.aiit.service.RouletteService;

@RestController
@RequestMapping("/roulette")
@RequiredArgsConstructor
public class RouletteController {

    private final RouletteService rouletteService;

    @PostMapping("/spin")
    public ResponseEntity<RouletteResponseDto> spinRoulette() {
        RouletteResponseDto response = rouletteService.spinRoulette();

        if (response.getStatus() == Status.ERROR) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build(); // 204 No Content
        }

        return ResponseEntity.ok(response);
    }
}

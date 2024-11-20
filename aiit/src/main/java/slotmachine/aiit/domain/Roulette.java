package slotmachine.aiit.domain;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "participation")
@EntityListeners(AuditingEntityListener.class)
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Roulette {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "participant_id", nullable = false)
    private Long participantId;

    @Column(name = "user_id", nullable = false)
    private String userId;

    @Column(name = "isDrawn", nullable = false)
    private boolean isDrawn = false;

    public void updateIsDrawn(boolean isDrawn) {
        this.isDrawn = isDrawn;
    }
}


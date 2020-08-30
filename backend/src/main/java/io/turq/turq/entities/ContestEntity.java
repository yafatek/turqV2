package io.turq.turq.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "contests")
public class ContestEntity {

    public ContestEntity(String title, Date endDate, int prize, String rules, String criteria, boolean approved, String description, UserEntity author) {
        this.title = title;
        this.endDate = endDate;
        this.prize = prize;
        this.rules = rules;
        this.criteria = criteria;
        this.approved = approved;
        this.description = description;
        this.author = author;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private Date endDate;
    private int prize;
    private String rules;
    private String criteria;
    private boolean approved;
    private String description;
    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_contest_id"))
    private UserEntity author;
}

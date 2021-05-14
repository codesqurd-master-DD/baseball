package com.team20.baseball.domain.team;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Table("team")
public class Team {
    @Id
    private Long id;
    private String name;
    private Long userId;

    @MappedCollection(idColumn = "team_id")
    private Set<Player> players = new HashSet<>();

    public Team(Long id, String name, Long userId, Set<Player> players) {
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.players = players;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public boolean isSelected() {
        return userId != null;
    }

    public Set<Player> getPlayers() {
        return players;
    }

    public Set<Player> getBatters() {
        return players.stream()
                .filter(player -> player.getIsPitcher())
                .collect(Collectors.toSet());
    }

    public Player getPitcher() {
        return players.stream()
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }

}

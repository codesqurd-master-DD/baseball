package com.team20.baseball.dto;

public class StartRequest {
    private Long inningNumber;
    private boolean isTop;

    public StartRequest(Long inningNumber, boolean isTop) {
        this.inningNumber = inningNumber;
        this.isTop = isTop;
    }

    public Long getInningNumber() {
        return inningNumber;
    }

    public boolean isTop() {
        return isTop;
    }
}

package com.team20.baseball.dto;

import org.springframework.data.domain.PageRequest;

public class PagingRequest {

    private static final int DEFAULT_LIMIT = 4;

    private int offset;
    private int limit;

    private PagingRequest(int offset, int limit) {
        this.offset = offset;
        this.limit = limit;
    }

    public int getOffset() {
        return offset;
    }

    public int getLimit() {
        return limit;
    }

    public static PagingRequest of(int offset) {
        return new PagingRequest(offset, DEFAULT_LIMIT);
    }
    public PageRequest toPageRequest() {
        return PageRequest.of(offset - 1, limit);
    }

}

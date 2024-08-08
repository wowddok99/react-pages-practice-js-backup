import { gql } from "@apollo/client"

export const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
            createdAt
        }
    }
`

export const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId:$boardId)
    }
`

export const CREATE_BOARD_COMMENT = gql`
    mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!){
        createBoardComment(createBoardCommentInput:$createBoardCommentInput, boardId:$boardId){
            _id
            writer
            contents
            rating
            createdAt
        }   
    }
`

export const FETCH_BOARD_COMMENTS = gql`
    query fetchBoardComments($page: Int, $boardId: ID!){
        fetchBoardComments(page:$page, boardId:$boardId){
            _id
            writer
            contents
            rating
            createdAt
        }
    }
`

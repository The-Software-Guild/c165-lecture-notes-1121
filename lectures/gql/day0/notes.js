// notes.js

// security concern => privatization of data 
// personal user information (account page) => me & another user #2

// usability concerns => UI 
// todo list 

// cookie/session based
// OAuth (SDK/API based) => Auth0, Auth2.0

// token-based


const person = {
     location: 'bk'
}

// JWT === 'JOT'













// JWT's
// header, payload, signature

// const newToken = jwt('header', payload, sh256())


// one-way-fx's


// deterministic fx's 
// all fx's in js are deterministic
// JS has 1st class functions meanign we treat them just like variable:

// 1) pass fx's as arguments ot other fx's
// 2) fx expressions can be stored as values 
// 3) they give us a predictable output given a similar message (input)

// react components => pure functions but they also exhibit charecteristics of 1st class functions
// it must NOT try to interact or agument its inputs (props) => you can never trust or should 
// never count on props as a means to set state or create new data

const someFx = () => {

}


// a singular file should export a singular component
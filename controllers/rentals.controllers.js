const ArticleLoans = require('../models/ArticleLoans');
const LoanModel = require('../models/Loan');
// const ArticleLoanModel = require('../models/')


const newLoanController = async (req, res) => {
    const { start_loan,
            loan_ends,
            userId,
            articleId } = req.body;

   const newLoan = await LoanModel.create({
        start_loan,
        loan_ends,
        userId
    });

    await ArticleLoans.create({
        articleId,
        loanId: newLoan.id
    });
 
    res.send('new loan added');
};


module.exports = {
    newLoanController,
}
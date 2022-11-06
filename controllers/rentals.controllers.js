const ArticleLoansModel = require('../models/ArticleLoans');
const LoanModel = require('../models/Loan');


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

    await ArticleLoansModel.create({
        articleId,
        loanId: newLoan.id
    });

    res.send('new loan added');
};

const modifyLoanController = async (req, res) => {
    const { loanId } = req.params;

    const articlesId = req.body;

    const orderModified = await ArticleLoansModel.update({ articlesId: articlesId }, {
        where: {
            loanId: loanId
        }
    });

    res.json(orderModified);
};

const getAllUserLoansController = async (req, res) => {
    try {
        const { userId } = req.params;

        const userLoans = await LoanModel.findAll({
            where: {
                userId
            }
        });

        res.json(userLoans);

    } catch (error) {

        return res.status(404).json({ message: error.message });
    }

};

const getAllLoansController = async (req, res) => {
    try {
        const articlesAndLoans = await ArticleLoansModel.findAll();
        res.json(articlesAndLoans)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    newLoanController,
    modifyLoanController,
    getAllUserLoansController,
    getAllLoansController,
};
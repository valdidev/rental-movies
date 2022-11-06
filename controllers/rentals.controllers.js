const ArticleLoansModel = require('../models/ArticleLoans');
const LoanModel = require('../models/Loan');


const newLoanController = async (req, res) => {
    try {
        const { start_loan,
            loan_ends,
            userId,
            articleId } = req.body;

        // loan table register
        const newLoan = await LoanModel.create({
            start_loan,
            loan_ends,
            userId
        });

        // check simple or multiple articles 
        // simple
        if (articleId.length == 1) {
            await ArticleLoansModel.create({
                articleId: articleId[0],
                loanId: newLoan.id
            });

            return res.send('new loan simple added');
        };
        // multiple
        for (let i = 0; i < articleId.length; i++) {
            await ArticleLoansModel.create({
                articleId: articleId[i],
                loanId: newLoan.id
            });
        }

        res.send('multiple loan multiple added');
    } catch (error) {
        res.send(error)
    }
};

const modifyLoanController = async (req, res) => {
    try {
        const { loanId } = req.params;
    const newArticles = req.body.articlesId;

    // find all articles for that loan
    let loans = await ArticleLoansModel.findAll({
        where: {
            loanId
        }
    });

    if(!loans.length){
        return res.status(404).send({message: "No loans with that ID"});
    }
    
    // update values
    for (let i = 0; i < loans.length; i++) {
        await ArticleLoansModel.update(newArticles[i],{
            where: {
                articleId: loans[i].articleId
            }
        });
    }

    res.status(200).json({message: "Loan updated successfully"});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
};

const getAllUserLoansController = async (req, res) => {
    try {
        const { userId } = req.params;

        const userLoans = await LoanModel.findAll({
            where: {
                userId
            }
        });

        if (!userLoans.length) return res.status(404).json({message: 'Loans not found'});

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
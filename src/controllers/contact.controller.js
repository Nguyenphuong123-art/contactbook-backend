exports.create = (req, res) => {
    return res.send({ message: 'create handler' });
};

exports.findAll = (req, res) => {
    return res.send({ message: 'findAll hadler' });
};

exports.findOne = (req, res) => {
    return res.send({ message: 'findOne hadler' });
};

exports.update = (req, res) => {
    return res.send({ message: 'update hadler' });
};

exports.delete = (req, res) => {
    return res.send({ message: 'delete hadler' });
};

exports.deleteAll = (req, res) => {
    return res.send({ message: 'deleteAll hadler' });
};

exports.findAllFavorite = (req, res) => {
    return res.send({ message: 'findAllFavorite hadler' });
};


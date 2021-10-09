// @desc    GET all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
   res.status(200).json({
      data: {
         operation: 'GET all bootcamps',
      },
      author: 'dkampas',
      success: 'true',
   });
};

// @desc    GET bootcamp by ID
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
   res.status(200).json({
      data: {
         operation: `GET bootcamp ${req.params.id}`,
      },
      author: 'dkampas',
      success: 'true',
   });
};

// @desc    ADD bootcamp
// @route   POST /api/v1/bootcamps/
// @access  Private
exports.addBootcamp = (req, res, next) => {
   res.status(200).json({
      data: {
         operation: 'ADD new bootcamp',
      },
      author: 'dkampas',
      success: 'true',
   });
};

// @desc    UPDATE bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
   res.status(200).json({
      data: {
         operation: `UPDATE bootcamp ${req.params.id}`,
      },
      author: 'dkampas',
      success: 'true',
   });
};

// @desc    DELETE bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
   res.status(200).json({
      data: {
         operation: `DELETE bootcamp ${req.params.id}`,
      },
      author: 'dkampas',
      success: 'true',
   });
};

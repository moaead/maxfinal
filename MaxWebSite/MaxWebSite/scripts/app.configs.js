
    var app = angular
        .module("MaxApp", ['ui.router'])
            .config(['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {

                    $urlRouterProvider
                    .otherwise("/");

                    $stateProvider
                    .state('login', {

                        url: '/login',
                        isRequireLogin: false,
                        views: {
                            'app': {
                                templateUrl: "/Views/Login.cshtml",
                                controller: "Login",
                            },
                            'footer': {
                                templateUrl: '/Views/Shared/_Footer.cshtml'
                            }
                        }
                    })
                    .state('loading', {
                        url: '/loading/:redirectURL',
                        isRequireLogin: true,
                        views: {
                            'app': {
                                template: "<h1> Loading ...  </h1> ",
                                controller: "Loading",
                            },
                            'footer': {
                                templateUrl: '/Views/Shared/_Footer.cshtml'
                            }
                        }
                    })
                    .state('app', {
                        url: '^',
                        isRequireLogin: true,
                        caseInsensitiveMatch: true,
                        redirectUrl: '/dashboard',
                        onEnter: ["authenticationService", "applicationLoad", "$state",
                        function (authenticationService, applicationLoad, $state) {
                            if (!authenticationService.isAuthenticated()) {
                                $state.go("login");
                            }
                            else if (!applicationLoad.isReady()) {
                                console.log('not ready ');
                                $state.go('loading', { redirectUrl: '/dashboard' });
                            }
                        }],
                        ncyBreadcrumb: {
                            label: ''
                        },
                        views: {
                            'app@': {
                                templateUrl: "/Views/Shared/main-view.html",
                                controller: "GlobalController",
                            },
                            'navbar@app': {
                                templateUrl: 'Views/Shared/header.cshtml'
                            },
                            'leftPanel@app': {
                                templateUrl: '/Views/Shared/leftPanel.cshtml',
                                controller: 'LeftPanelGraphsController',
                            },
                            'footer': {
                                templateUrl: '/Views/Shared/_Footer.cshtml'
                            }
                        }
                    })
                    .state('dashboard', {
                        url: '/dashboard',
                        parent: 'app',
                        views: {
                            'content': {
                                templateUrl: "/Views/newDashboard.cshtml",
                                controller: "NewDashboardController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Dashboard'
                        },
                    })
                    .state('reports', {
                        url: '/reports',
                        parent: 'app',
                        views: {
                            'content': {
                                templateUrl: "/Views/reports.cshtml",
                                controller: "ReportsController"
                            }
                        }
                    })
                    .state('oldDashboard', {
                        url: 'oldDashboard',
                        parent: 'app',
                        views: {
                            'content': {
                                templateUrl: "/Views/dashboard.cshtml",
                                controller: "DashboardController"
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Old Dashboard'
                        },
                    })
                    .state('terminals', {
                        url: '/terminals',
                        parent: 'app',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/terminals.cshtml",
                                controller: "TerminalsController"
                            }

                        },
                        ncyBreadcrumb: {
                            label: 'Terminals Management'
                        },
                    })
                    .state('extended', {
                        url: '/terminals',
                        parent: 'app',
                        views: {
                            'app@': {
                                templateUrl: "/Views/Shared/extended-view.html",
                                controller: "GlobalController"
                            }

                        },
                        ncyBreadcrumb: {
                            label: 'Terminals'
                        },
                    })
                    .state('terminals.details', {
                        url: '/details/{terminalId}',
                        parent: 'extended',
                        views: {
                            'content@extended': {
                                templateUrl: "/Views/TerminalDetails.cshtml",
                                controller: "TerminalDetailsController"
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Details'
                        },
                    })
                    .state('terminals.add', {
                        url: '/add',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/addTerminal.cshtml",
                                controller: "AddTerminalController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Add Terminal'
                        },
                    })
                    .state('partners', {
                        url: '/partners',
                        parent: 'app',
                        views: { 'app@content': { templateUrl: "/Views/partnerManagment.cshtml", controller: "PartnerManagmentController", } },
                        ncyBreadcrumb: {
                            label: 'Partners'
                        },
                    })
                    .state('partners.managment', {
                        url: '/managment',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/partnerManagment.cshtml",
                                controller: "PartnerManagmentController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Manage'
                        },
                    })
                    .state('partners.add', {
                        url: '/add',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/AddPartner.cshtml",
                                controller: "AddPartnerController",
                            }
                        }
                    })
                    .state('partners.edit', {
                        url: '/edit/{Id}',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/AddPartner.cshtml",
                                controller: "EditPartnerController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Edit'
                        },
                    })
                    .state('partners.hierarchy', {
                        url: '/hierarchy',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/partnerHierarchy.cshtml",
                                controller: "PartnerHierarchyController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Hierarchy'
                        },
                    })
                    .state('changeRequestForm', {
                        url: '/ChangeRequestForm',
                        parent: 'app',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/ChangeRequestForm.cshtml",
                                controller: "ChangeRequestFormController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Change Request Form'
                        },
                    })
                    .state('partnerProfile', {
                        url: '/partnerProfile/:Id',
                        parent: 'app',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/PartnerProfile.cshtml",
                                controller: "PartnerProfileController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Partner Profile'
                        },
                    })
                    .state('user', {
                        url: '/user',
                        parent: 'app',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/UserManagement.cshtml",
                                controller: "UserManagmentController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Users'
                        },
                    })
                    .state('user.management', {
                        url: '/management',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/UserManagement.cshtml",
                                controller: "UserManagmentController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Management'
                        },
                    })
                    .state('user.profile', {
                        url: '/profile',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/UserProfile.cshtml",
                                controller: "UserProfileController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'User Profile'
                        },
                    })
                    .state('user.add', {
                        url: '/add',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/AddUser.cshtml",
                                controller: "AddUserController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Add Users'
                        },
                    }).state('user.assign-task', {
                        url: '/assign-task',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/AssignTerminalToUser.cshtml",
                                controller: "AssignTerminalToUserController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Assign'
                        },
                    }).state('user.assign-terminal', {
                        url: '/terminal/:userId',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/AssignTerminalToUser.cshtml",
                                controller: "AssignTerminalToUserController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Assign Terminals'
                        },
                    })
                    .state('user.assign.group', {
                        url: '/group/:id',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/AssignUserToGroup.cshtml",
                                controller: "AddUserToGroupController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Assign to Groups'
                        },
                    }).state('group', {
                        url: '/group',
                        parent: 'app',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/groupManagement.cshtml",
                                controller: "GroupManagmentController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Groups Managment'
                        },
                    }).state('group.assignUserToGroup', {
                        url: '/assign/:id',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/AssignUserToGroup.cshtml",
                                controller: "AddUserToGroupController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Assign Users To Group'
                        },
                    })
                   .state('group.assignTerminals', {
                       url: '/AddTerminal/:id',
                       views: {
                           'content@app': {
                               templateUrl: "/Views/AssignTerminalToGroup.cshtml",
                               controller: "AddTerminalToGroupController",
                           }
                       },
                       ncyBreadcrumb: {
                           label: 'Assign Terminals'
                       },
                   }).state('group.management', {
                       url: '/management',
                       views: {
                           'content@app': {
                               templateUrl: "/Views/groupManagement.cshtml",
                               controller: "GroupManagmentController",
                           }
                       },
                       ncyBreadcrumb: {
                           label: 'Manage Groups'
                       },
                   }).state('group.add', {
                       url: '/add',
                       views: {
                           'content@app': {
                               templateUrl: "/Views/AddGroup.cshtml",
                               controller: "AddGroupController",
                           }
                       },
                       ncyBreadcrumb: {
                           label: 'Add Group'
                       },
                   }).state('alerts', {
                       url: '/Alerts',
                       parent: 'app',
                       views: {
                           'content@app': {
                               templateUrl: "/Views/Alerts.cshtml",
                               controller: "AlertsController",
                           }
                       },
                       ncyBreadcrumb: {
                           label: 'Alerts'
                       },
                   }).state('sitemap', {
                       url: 'sitemap',
                       parent: 'app',
                       views: {
                           'content': {
                               templateUrl: "/Views/SiteMap.cshtml",
                               //controller: "SitemapController",
                           }
                       },
                       ncyBreadcrumb: {
                           label: 'Sitemap'
                       },
                   }).state('TIDRequest', {
                       url: '/TIDRequest',
                       parent: 'app',
                       views: {
                           'content': {
                               templateUrl: "/Views/TIDRequest.cshtml",
                               controller: "TIDRequestController",
                           }
                       },
                       ncyBreadcrumb: {
                           label: 'TID Request'
                       },
                   }).state('ACHForm', {
                       url: '/ACHForm',
                       parent: 'app',
                       views: {
                           'content': {
                               templateUrl: "/Views/ACHForm.cshtml",
                               controller: "ACHFormController",
                           }
                       },
                       ncyBreadcrumb: {
                           label: 'ACH Form'
                       },
                   }).state('settings', {
                       url: '/Settings',
                       parent: 'app',
                       views: {
                           'content': {
                               templateUrl: "/Views/settings.cshtml",
                               controller: "SettingsController",
                           }
                       },
                       ncyBreadcrumb: {
                           label: 'Settings'
                       },
                   })
                    .state('tasks', {
                        url: '/Tasks',
                        parent: 'app',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/tasks.cshtml",
                                controller: "TasksController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Tasks Management'
                        },
                    })
                    .state('tasks.assignToUser', {
                        url: '/assignToUser/:terminalId-:date-:time-:code',
                        views: {
                            'content@app': {
                                templateUrl: "/Views/AssignUserToTask.cshtml",
                                controller: "assignUserToTaskController",
                            }
                        },
                        ncyBreadcrumb: {
                            label: 'Assign To User'
                        },
                    }).state('locationReport', {
                        url: '/LocationReport/:terminalId/:date',
                        parent: 'app',
                        views: {
                            'app@': {
                                templateUrl: "/Views/LocationReport.cshtml",
                                controller: "LocationReportController",
                            }
                        },
                    }).state('logout', {
                        url: '/logout',
                        caseInsensitiveMatch: true,
                        isRequireLogin: true,
                        views: {
                            "app": {
                                template: "Logging out .... ",
                                controller: "Logout",
                            }
                        }
                    });
                }]);




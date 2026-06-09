import type { INodeProperties } from 'n8n-workflow';

export const adminAdminDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin"
					]
				}
			},
			"options": [
				{
					"name": "Admin Admin Get Admin",
					"value": "Admin Admin Get Admin",
					"action": "Get admin",
					"description": "Get admin",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin"
						}
					}
				},
				{
					"name": "Admin Admin Update Admin",
					"value": "Admin Admin Update Admin",
					"action": "Update admin",
					"description": "Update admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /admin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin"
					],
					"operation": [
						"Admin Admin Get Admin"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin"
					],
					"operation": [
						"Admin Admin Get Admin"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin"
					],
					"operation": [
						"Admin Admin Get Admin"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin"
					],
					"operation": [
						"Admin Admin Update Admin"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin"
					],
					"operation": [
						"Admin Admin Update Admin"
					]
				}
			}
		},
		{
			"displayName": "Edge",
			"name": "edge",
			"type": "string",
			"default": {
				"internetExplorerMode": {
					"siteLists": [
						{
							"lastModifiedBy": {
								"application": {},
								"device": {},
								"user": {}
							},
							"publishedBy": {},
							"sharedCookies": [
								{
									"history": [
										{
											"lastModifiedBy": {}
										}
									],
									"lastModifiedBy": {},
									"sourceEnvironment": {}
								}
							],
							"sites": [
								{
									"history": [
										{
											"compatibilityMode": {},
											"lastModifiedBy": {}
										}
									],
									"lastModifiedBy": {},
									"mergeType": {},
									"targetEnvironment": {}
								}
							]
						}
					]
				}
			},
			"routing": {
				"send": {
					"property": "edge",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin"
					],
					"operation": [
						"Admin Admin Update Admin"
					]
				}
			}
		},
		{
			"displayName": "Report Settings",
			"name": "reportSettings",
			"type": "string",
			"default": {},
			"routing": {
				"send": {
					"property": "reportSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin"
					],
					"operation": [
						"Admin Admin Update Admin"
					]
				}
			}
		},
		{
			"displayName": "Service Announcement",
			"name": "serviceAnnouncement",
			"type": "string",
			"default": {
				"healthOverviews": [
					{
						"issues": [
							{
								"@odata.type": "#microsoft.graph.serviceHealthIssue",
								"details": [
									{}
								],
								"posts": [
									{
										"description": {}
									}
								]
							}
						],
						"status": {}
					}
				],
				"issues": [
					{}
				],
				"messages": [
					{
						"@odata.type": "#microsoft.graph.serviceUpdateMessage",
						"attachments": [
							{}
						],
						"body": {},
						"services": [
							null
						],
						"tags": [
							null
						],
						"viewPoint": {}
					}
				]
			},
			"routing": {
				"send": {
					"property": "serviceAnnouncement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin"
					],
					"operation": [
						"Admin Admin Update Admin"
					]
				}
			}
		},
		{
			"displayName": "Sharepoint",
			"name": "sharepoint",
			"type": "string",
			"default": {
				"settings": {
					"allowedDomainGuidsForSyncApp": [
						null
					],
					"availableManagedPathsForSiteCreation": [
						null
					],
					"excludedFileExtensionsForSyncApp": [
						null
					],
					"idleSessionSignOut": {},
					"sharingAllowedDomainList": [
						null
					],
					"sharingBlockedDomainList": [
						null
					]
				}
			},
			"routing": {
				"send": {
					"property": "sharepoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin"
					],
					"operation": [
						"Admin Admin Update Admin"
					]
				}
			}
		},
		{
			"displayName": "Windows",
			"name": "windows",
			"type": "string",
			"default": {
				"updates": {
					"catalog": {
						"entries": [
							{}
						]
					},
					"deploymentAudiences": [
						{
							"applicableContent": [
								{
									"catalogEntry": {},
									"matchedDevices": [
										{
											"recommendedBy": [
												null
											]
										}
									]
								}
							],
							"exclusions": [
								{}
							],
							"members": [
								{}
							]
						}
					],
					"deployments": [
						{
							"audience": {},
							"content": {},
							"settings": {
								"contentApplicability": {
									"offerWhileRecommendedBy": [
										null
									],
									"safeguard": {
										"disabledSafeguardProfiles": [
											{}
										]
									}
								},
								"expedite": {},
								"monitoring": {
									"monitoringRules": [
										{}
									]
								},
								"schedule": {
									"gradualRollout": {}
								},
								"userExperience": {}
							},
							"state": {
								"reasons": [
									{}
								]
							}
						}
					],
					"resourceConnections": [
						{}
					],
					"updatableAssets": [
						{}
					],
					"updatePolicies": [
						{
							"audience": {},
							"complianceChangeRules": [
								{}
							],
							"complianceChanges": [
								{
									"updatePolicy": {}
								}
							],
							"deploymentSettings": {}
						}
					]
				}
			},
			"routing": {
				"send": {
					"property": "windows",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin"
					],
					"operation": [
						"Admin Admin Update Admin"
					]
				}
			}
		},
];

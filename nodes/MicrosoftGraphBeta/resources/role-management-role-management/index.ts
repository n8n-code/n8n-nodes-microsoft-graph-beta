import type { INodeProperties } from 'n8n-workflow';

export const roleManagementRoleManagementDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Role Management"
					]
				}
			},
			"options": [
				{
					"name": "Role Management Role Management Get Role Management",
					"value": "Role Management Role Management Get Role Management",
					"action": "Get roleManagement",
					"description": "Get roleManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roleManagement"
						}
					}
				},
				{
					"name": "Role Management Role Management Update Role Management",
					"value": "Role Management Role Management Update Role Management",
					"action": "Update roleManagement",
					"description": "Update roleManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roleManagement"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /roleManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Role Management"
					],
					"operation": [
						"Role Management Role Management Get Role Management"
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
						"Role Management Role Management"
					],
					"operation": [
						"Role Management Role Management Get Role Management"
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
						"Role Management Role Management"
					],
					"operation": [
						"Role Management Role Management Get Role Management"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roleManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Role Management"
					],
					"operation": [
						"Role Management Role Management Update Role Management"
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
						"Role Management Role Management"
					],
					"operation": [
						"Role Management Role Management Update Role Management"
					]
				}
			}
		},
		{
			"displayName": "Cloud PC",
			"name": "cloudPC",
			"type": "string",
			"default": {
				"resourceNamespaces": [
					{
						"resourceActions": [
							{
								"resourceScope": {}
							}
						]
					}
				],
				"roleAssignments": [
					{
						"appScopeIds": [
							null
						],
						"appScopes": [
							{}
						],
						"directoryScopeIds": [
							null
						],
						"directoryScopes": [
							{}
						],
						"principalIds": [
							null
						],
						"principals": [
							{}
						],
						"roleDefinition": {
							"inheritsPermissionsFrom": [
								{}
							],
							"resourceScopes": [
								null
							],
							"rolePermissions": [
								{
									"allowedResourceActions": [
										null
									],
									"excludedResourceActions": [
										null
									]
								}
							]
						}
					}
				],
				"roleDefinitions": [
					{}
				]
			},
			"routing": {
				"send": {
					"property": "cloudPC",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Role Management"
					],
					"operation": [
						"Role Management Role Management Update Role Management"
					]
				}
			}
		},
		{
			"displayName": "Device Management",
			"name": "deviceManagement",
			"type": "string",
			"default": {
				"resourceNamespaces": [
					{
						"resourceActions": [
							{
								"resourceScope": {}
							}
						]
					}
				],
				"roleAssignments": [
					{
						"appScopeIds": [
							null
						],
						"appScopes": [
							{}
						],
						"directoryScopeIds": [
							null
						],
						"directoryScopes": [
							{}
						],
						"principalIds": [
							null
						],
						"principals": [
							{}
						],
						"roleDefinition": {
							"inheritsPermissionsFrom": [
								{}
							],
							"resourceScopes": [
								null
							],
							"rolePermissions": [
								{
									"allowedResourceActions": [
										null
									],
									"excludedResourceActions": [
										null
									]
								}
							]
						}
					}
				],
				"roleDefinitions": [
					{}
				]
			},
			"routing": {
				"send": {
					"property": "deviceManagement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Role Management"
					],
					"operation": [
						"Role Management Role Management Update Role Management"
					]
				}
			}
		},
		{
			"displayName": "Directory",
			"name": "directory",
			"type": "string",
			"default": {
				"resourceNamespaces": [
					{
						"resourceActions": [
							{
								"resourceScope": {}
							}
						]
					}
				],
				"roleAssignmentApprovals": [
					{
						"steps": [
							{
								"reviewedBy": {}
							}
						]
					}
				],
				"roleAssignmentScheduleInstances": [
					{
						"appScope": {},
						"directoryScope": {},
						"principal": {},
						"roleDefinition": {
							"inheritsPermissionsFrom": [
								{}
							],
							"resourceScopes": [
								null
							],
							"rolePermissions": [
								{
									"allowedResourceActions": [
										null
									],
									"excludedResourceActions": [
										null
									]
								}
							]
						},
						"activatedUsing": {}
					}
				],
				"roleAssignmentScheduleRequests": [
					{
						"@odata.type": "#microsoft.graph.unifiedRoleAssignmentScheduleRequest",
						"createdBy": {
							"application": {},
							"device": {},
							"user": {}
						},
						"activatedUsing": {
							"appScope": {},
							"directoryScope": {},
							"principal": {},
							"roleDefinition": {},
							"scheduleInfo": {
								"expiration": {},
								"recurrence": {
									"pattern": {
										"daysOfWeek": [
											null
										],
										"firstDayOfWeek": {}
									},
									"range": {}
								}
							}
						},
						"appScope": {},
						"directoryScope": {},
						"principal": {},
						"roleDefinition": {},
						"scheduleInfo": {},
						"targetSchedule": {
							"activatedUsing": {},
							"scheduleInfo": {}
						},
						"ticketInfo": {}
					}
				],
				"roleAssignmentSchedules": [
					{}
				],
				"roleAssignments": [
					{
						"appScope": {},
						"directoryScope": {},
						"principal": {},
						"roleDefinition": {}
					}
				],
				"roleDefinitions": [
					{}
				],
				"roleEligibilityScheduleInstances": [
					{}
				],
				"roleEligibilityScheduleRequests": [
					{
						"@odata.type": "#microsoft.graph.unifiedRoleEligibilityScheduleRequest",
						"appScope": {},
						"directoryScope": {},
						"principal": {},
						"roleDefinition": {},
						"scheduleInfo": {},
						"targetSchedule": {},
						"ticketInfo": {}
					}
				],
				"roleEligibilitySchedules": [
					{}
				],
				"transitiveRoleAssignments": [
					{}
				]
			},
			"routing": {
				"send": {
					"property": "directory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Role Management"
					],
					"operation": [
						"Role Management Role Management Update Role Management"
					]
				}
			}
		},
		{
			"displayName": "Entitlement Management",
			"name": "entitlementManagement",
			"type": "string",
			"default": {
				"resourceNamespaces": [
					{
						"resourceActions": [
							{
								"resourceScope": {}
							}
						]
					}
				],
				"roleAssignmentApprovals": [
					{
						"steps": [
							{
								"reviewedBy": {}
							}
						]
					}
				],
				"roleAssignmentScheduleInstances": [
					{
						"appScope": {},
						"directoryScope": {},
						"principal": {},
						"roleDefinition": {
							"inheritsPermissionsFrom": [
								{}
							],
							"resourceScopes": [
								null
							],
							"rolePermissions": [
								{
									"allowedResourceActions": [
										null
									],
									"excludedResourceActions": [
										null
									]
								}
							]
						},
						"activatedUsing": {}
					}
				],
				"roleAssignmentScheduleRequests": [
					{
						"@odata.type": "#microsoft.graph.unifiedRoleAssignmentScheduleRequest",
						"createdBy": {
							"application": {},
							"device": {},
							"user": {}
						},
						"activatedUsing": {
							"appScope": {},
							"directoryScope": {},
							"principal": {},
							"roleDefinition": {},
							"scheduleInfo": {
								"expiration": {},
								"recurrence": {
									"pattern": {
										"daysOfWeek": [
											null
										],
										"firstDayOfWeek": {}
									},
									"range": {}
								}
							}
						},
						"appScope": {},
						"directoryScope": {},
						"principal": {},
						"roleDefinition": {},
						"scheduleInfo": {},
						"targetSchedule": {
							"activatedUsing": {},
							"scheduleInfo": {}
						},
						"ticketInfo": {}
					}
				],
				"roleAssignmentSchedules": [
					{}
				],
				"roleAssignments": [
					{
						"appScope": {},
						"directoryScope": {},
						"principal": {},
						"roleDefinition": {}
					}
				],
				"roleDefinitions": [
					{}
				],
				"roleEligibilityScheduleInstances": [
					{}
				],
				"roleEligibilityScheduleRequests": [
					{
						"@odata.type": "#microsoft.graph.unifiedRoleEligibilityScheduleRequest",
						"appScope": {},
						"directoryScope": {},
						"principal": {},
						"roleDefinition": {},
						"scheduleInfo": {},
						"targetSchedule": {},
						"ticketInfo": {}
					}
				],
				"roleEligibilitySchedules": [
					{}
				],
				"transitiveRoleAssignments": [
					{}
				]
			},
			"routing": {
				"send": {
					"property": "entitlementManagement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Role Management"
					],
					"operation": [
						"Role Management Role Management Update Role Management"
					]
				}
			}
		},
		{
			"displayName": "Exchange",
			"name": "exchange",
			"type": "string",
			"default": {
				"resourceNamespaces": [
					{
						"resourceActions": [
							{
								"resourceScope": {}
							}
						]
					}
				],
				"roleAssignments": [
					{
						"appScope": {},
						"directoryScope": {},
						"principal": {},
						"roleDefinition": {
							"inheritsPermissionsFrom": [
								{}
							],
							"resourceScopes": [
								null
							],
							"rolePermissions": [
								{
									"allowedResourceActions": [
										null
									],
									"excludedResourceActions": [
										null
									]
								}
							]
						}
					}
				],
				"roleDefinitions": [
					{}
				],
				"transitiveRoleAssignments": [
					{}
				]
			},
			"routing": {
				"send": {
					"property": "exchange",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role Management Role Management"
					],
					"operation": [
						"Role Management Role Management Update Role Management"
					]
				}
			}
		},
];

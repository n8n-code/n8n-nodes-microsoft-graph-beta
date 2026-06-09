import type { INodeProperties } from 'n8n-workflow';

export const tenantRelationshipsTenantRelationshipDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Tenant Relationship"
					]
				}
			},
			"options": [
				{
					"name": "Tenant Relationships Tenant Relationship Get Tenant Relationship",
					"value": "Tenant Relationships Tenant Relationship Get Tenant Relationship",
					"action": "Get tenantRelationships",
					"description": "Get tenantRelationships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenantRelationships"
						}
					}
				},
				{
					"name": "Tenant Relationships Tenant Relationship Update Tenant Relationship",
					"value": "Tenant Relationships Tenant Relationship Update Tenant Relationship",
					"action": "Update tenantRelationships",
					"description": "Update tenantRelationships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenantRelationships"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /tenantRelationships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Tenant Relationship"
					],
					"operation": [
						"Tenant Relationships Tenant Relationship Get Tenant Relationship"
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
						"Tenant Relationships Tenant Relationship"
					],
					"operation": [
						"Tenant Relationships Tenant Relationship Get Tenant Relationship"
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
						"Tenant Relationships Tenant Relationship"
					],
					"operation": [
						"Tenant Relationships Tenant Relationship Get Tenant Relationship"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenantRelationships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Tenant Relationship"
					],
					"operation": [
						"Tenant Relationships Tenant Relationship Update Tenant Relationship"
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
						"Tenant Relationships Tenant Relationship"
					],
					"operation": [
						"Tenant Relationships Tenant Relationship Update Tenant Relationship"
					]
				}
			}
		},
		{
			"displayName": "Delegated Admin Customers",
			"name": "delegatedAdminCustomers",
			"type": "json",
			"default": "[\n  {\n    \"serviceManagementDetails\": [\n      {}\n    ]\n  }\n]",
			"description": "The customer who has a delegated admin relationship with a Microsoft partner.",
			"routing": {
				"send": {
					"property": "delegatedAdminCustomers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Tenant Relationship"
					],
					"operation": [
						"Tenant Relationships Tenant Relationship Update Tenant Relationship"
					]
				}
			}
		},
		{
			"displayName": "Delegated Admin Relationships",
			"name": "delegatedAdminRelationships",
			"type": "json",
			"default": "[\n  {\n    \"accessAssignments\": [\n      {\n        \"accessContainer\": {},\n        \"accessDetails\": {\n          \"unifiedRoles\": [\n            {}\n          ]\n        }\n      }\n    ],\n    \"accessDetails\": {},\n    \"customer\": {},\n    \"operations\": [\n      {}\n    ],\n    \"requests\": [\n      {}\n    ]\n  }\n]",
			"description": "The details of the delegated administrative privileges that a Microsoft partner has in a customer tenant.",
			"routing": {
				"send": {
					"property": "delegatedAdminRelationships",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Tenant Relationship"
					],
					"operation": [
						"Tenant Relationships Tenant Relationship Update Tenant Relationship"
					]
				}
			}
		},
		{
			"displayName": "Managed Tenants",
			"name": "managedTenants",
			"type": "string",
			"default": {
				"aggregatedPolicyCompliances": [
					{}
				],
				"auditEvents": [
					{}
				],
				"cloudPcConnections": [
					{}
				],
				"cloudPcDevices": [
					{}
				],
				"cloudPcsOverview": [
					{}
				],
				"conditionalAccessPolicyCoverages": [
					{}
				],
				"credentialUserRegistrationsSummaries": [
					{}
				],
				"deviceCompliancePolicySettingStateSummaries": [
					{}
				],
				"managedDeviceComplianceTrends": [
					{}
				],
				"managedDeviceCompliances": [
					{}
				],
				"managedTenantAlertLogs": [
					{
						"alert": {
							"alertData": {},
							"alertDataReferenceStrings": [
								{}
							],
							"alertLogs": [
								{}
							],
							"alertRule": {
								"alerts": [
									{}
								],
								"ruleDefinition": {
									"alertRules": [
										{}
									],
									"definitionTemplate": {}
								},
								"severity": {},
								"targets": [
									{}
								],
								"tenantIds": [
									{}
								]
							},
							"apiNotifications": [
								{
									"alert": {}
								}
							],
							"emailNotifications": [
								{
									"alert": {},
									"emailAddresses": [
										{}
									]
								}
							],
							"severity": {}
						},
						"content": {}
					}
				],
				"managedTenantAlertRuleDefinitions": [
					{}
				],
				"managedTenantAlertRules": [
					{}
				],
				"managedTenantAlerts": [
					{}
				],
				"managedTenantApiNotifications": [
					{}
				],
				"managedTenantEmailNotifications": [
					{}
				],
				"managedTenantTicketingEndpoints": [
					{}
				],
				"managementActionTenantDeploymentStatuses": [
					{
						"statuses": [
							{
								"workloadActionDeploymentStatuses": [
									{
										"error": {},
										"excludeGroups": [
											null
										],
										"includeGroups": [
											null
										]
									}
								]
							}
						]
					}
				],
				"managementActions": [
					{
						"workloadActions": [
							{
								"licenses": [
									null
								],
								"settings": [
									{}
								]
							}
						]
					}
				],
				"managementIntents": [
					{
						"managementTemplates": [
							{
								"category": {}
							}
						]
					}
				],
				"managementTemplateCollectionTenantSummaries": [
					{}
				],
				"managementTemplateCollections": [
					{
						"managementTemplates": [
							{
								"category": {},
								"informationLinks": [
									{}
								],
								"managementTemplateCollections": [
									{}
								],
								"managementTemplateSteps": [
									{
										"acceptedVersion": {
											"acceptedFor": {},
											"deployments": [
												{
													"error": {},
													"templateStepVersion": {}
												}
											],
											"templateStep": {}
										},
										"category": {},
										"managementTemplate": {},
										"portalLink": {},
										"versions": [
											{}
										]
									}
								],
								"parameters": [
									{
										"valueType": {}
									}
								],
								"workloadActions": [
									{}
								]
							}
						]
					}
				],
				"managementTemplateStepTenantSummaries": [
					{}
				],
				"managementTemplateStepVersions": [
					{}
				],
				"managementTemplateSteps": [
					{}
				],
				"managementTemplates": [
					{}
				],
				"myRoles": [
					{
						"assignments": [
							{
								"roles": [
									{}
								]
							}
						]
					}
				],
				"tenantGroups": [
					{
						"managementActions": [
							{}
						],
						"managementIntents": [
							{
								"managementTemplates": [
									{}
								]
							}
						],
						"tenantIds": [
							null
						]
					}
				],
				"tenantTags": [
					{
						"tenants": [
							{}
						]
					}
				],
				"tenants": [
					{
						"contract": {},
						"tenantStatusInformation": {
							"delegatedPrivilegeStatus": {},
							"workloadStatuses": [
								{}
							]
						}
					}
				],
				"tenantsCustomizedInformation": [
					{
						"contacts": [
							{}
						]
					}
				],
				"tenantsDetailedInformation": [
					{}
				],
				"windowsDeviceMalwareStates": [
					{}
				],
				"windowsProtectionStates": [
					{}
				]
			},
			"routing": {
				"send": {
					"property": "managedTenants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenant Relationships Tenant Relationship"
					],
					"operation": [
						"Tenant Relationships Tenant Relationship Update Tenant Relationship"
					]
				}
			}
		},
];

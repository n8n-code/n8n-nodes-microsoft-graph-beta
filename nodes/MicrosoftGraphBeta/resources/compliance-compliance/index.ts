import type { INodeProperties } from 'n8n-workflow';

export const complianceComplianceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance Compliance"
					]
				}
			},
			"options": [
				{
					"name": "Compliance Compliance Get Compliance",
					"value": "Compliance Compliance Get Compliance",
					"action": "Get compliance",
					"description": "Get compliance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/compliance"
						}
					}
				},
				{
					"name": "Compliance Compliance Update Compliance",
					"value": "Compliance Compliance Update Compliance",
					"action": "Update compliance",
					"description": "Update compliance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/compliance"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /compliance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance Compliance"
					],
					"operation": [
						"Compliance Compliance Get Compliance"
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
						"Compliance Compliance"
					],
					"operation": [
						"Compliance Compliance Get Compliance"
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
						"Compliance Compliance"
					],
					"operation": [
						"Compliance Compliance Get Compliance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /compliance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance Compliance"
					],
					"operation": [
						"Compliance Compliance Update Compliance"
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
						"Compliance Compliance"
					],
					"operation": [
						"Compliance Compliance Update Compliance"
					]
				}
			}
		},
		{
			"displayName": "Ediscovery",
			"name": "ediscovery",
			"type": "string",
			"default": {
				"cases": [
					{
						"closedBy": {
							"application": {},
							"device": {},
							"user": {}
						},
						"custodians": [
							{
								"@odata.type": "#microsoft.graph.ediscovery.custodian",
								"lastIndexOperation": {
									"createdBy": {},
									"resultInfo": {}
								},
								"siteSources": [
									{
										"@odata.type": "#microsoft.graph.ediscovery.siteSource",
										"createdBy": {},
										"holdStatus": {},
										"site": {
											"@odata.type": "#microsoft.graph.site",
											"createdBy": {},
											"createdByUser": {
												"@odata.type": "#microsoft.graph.user",
												"activities": [
													{
														"contentInfo": {},
														"historyItems": [
															{
																"activity": {}
															}
														],
														"status": {},
														"visualElements": {
															"attribution": {},
															"content": {}
														}
													}
												],
												"agreementAcceptances": [
													{}
												],
												"analytics": {
													"activityStatistics": [
														{}
													],
													"settings": {}
												},
												"appConsentRequestsForApproval": [
													{
														"pendingScopes": [
															{}
														],
														"userConsentRequests": [
															{
																"@odata.type": "#microsoft.graph.userConsentRequest",
																"createdBy": {},
																"approval": {
																	"steps": [
																		{
																			"reviewedBy": {}
																		}
																	]
																}
															}
														]
													}
												],
												"appRoleAssignedResources": [
													{
														"@odata.type": "#microsoft.graph.servicePrincipal",
														"addIns": [
															{
																"properties": [
																	{}
																]
															}
														],
														"alternativeNames": [
															null
														],
														"appManagementPolicies": [
															{
																"@odata.type": "#microsoft.graph.appManagementPolicy",
																"appliesTo": [
																	{}
																],
																"restrictions": {
																	"keyCredentials": [
																		{}
																	],
																	"passwordCredentials": [
																		{}
																	]
																}
															}
														],
														"appRoleAssignedTo": [
															{}
														],
														"appRoleAssignments": [
															{}
														],
														"appRoles": [
															{
																"allowedMemberTypes": [
																	null
																]
															}
														],
														"claimsMappingPolicies": [
															{
																"@odata.type": "#microsoft.graph.claimsMappingPolicy",
																"appliesTo": [
																	{}
																],
																"definition": [
																	null
																]
															}
														],
														"createdObjects": [
															{}
														],
														"customSecurityAttributes": {},
														"delegatedPermissionClassifications": [
															{}
														],
														"endpoints": [
															{
																"@odata.type": "#microsoft.graph.endpoint"
															}
														],
														"federatedIdentityCredentials": [
															{
																"audiences": [
																	null
																]
															}
														],
														"homeRealmDiscoveryPolicies": [
															{
																"@odata.type": "#microsoft.graph.homeRealmDiscoveryPolicy"
															}
														],
														"info": {},
														"keyCredentials": [
															{}
														],
														"licenseDetails": [
															{
																"servicePlans": [
																	{}
																]
															}
														],
														"memberOf": [
															{}
														],
														"notificationEmailAddresses": [
															null
														],
														"oauth2PermissionGrants": [
															{}
														],
														"ownedObjects": [
															{}
														],
														"owners": [
															{}
														],
														"passwordCredentials": [
															{}
														],
														"passwordSingleSignOnSettings": {
															"fields": [
																{}
															]
														},
														"publishedPermissionScopes": [
															{}
														],
														"replyUrls": [
															null
														],
														"samlSingleSignOnSettings": {},
														"servicePrincipalNames": [
															null
														],
														"synchronization": {
															"jobs": [
																{
																	"schedule": {},
																	"schema": {
																		"directories": [
																			{
																				"objects": [
																					{
																						"attributes": [
																							{
																								"apiExpressions": [
																									{}
																								],
																								"metadata": [
																									{}
																								],
																								"referencedObjects": [
																									{}
																								]
																							}
																						],
																						"metadata": [
																							{}
																						],
																						"supportedApis": [
																							null
																						]
																					}
																				]
																			}
																		],
																		"synchronizationRules": [
																			{
																				"metadata": [
																					{}
																				],
																				"objectMappings": [
																					{
																						"attributeMappings": [
																							{
																								"source": {
																									"parameters": [
																										{
																											"value": {}
																										}
																									]
																								}
																							}
																						],
																						"metadata": [
																							{}
																						],
																						"scope": {
																							"categoryFilterGroups": [
																								{
																									"clauses": [
																										{
																											"targetOperand": {
																												"values": [
																													null
																												]
																											}
																										}
																									]
																								}
																							],
																							"groups": [
																								{}
																							],
																							"inputFilterGroups": [
																								{}
																							]
																						}
																					}
																				]
																			}
																		]
																	},
																	"status": {
																		"lastExecution": {
																			"error": {}
																		},
																		"lastSuccessfulExecution": {},
																		"lastSuccessfulExecutionWithExports": {},
																		"progress": [
																			{}
																		],
																		"quarantine": {
																			"error": {}
																		},
																		"synchronizedEntryCountByType": [
																			{}
																		]
																	},
																	"synchronizationJobSettings": [
																		{}
																	]
																}
															],
															"secrets": [
																{}
															],
															"templates": [
																{
																	"metadata": [
																		{}
																	],
																	"schema": {}
																}
															]
														},
														"tags": [
															null
														],
														"tokenIssuancePolicies": [
															{
																"@odata.type": "#microsoft.graph.tokenIssuancePolicy"
															}
														],
														"tokenLifetimePolicies": [
															{
																"@odata.type": "#microsoft.graph.tokenLifetimePolicy"
															}
														],
														"transitiveMemberOf": [
															{}
														],
														"verifiedPublisher": {}
													}
												],
												"appRoleAssignments": [
													{}
												],
												"approvals": [
													{}
												],
												"assignedLicenses": [
													{
														"disabledPlans": [
															null
														]
													}
												],
												"assignedPlans": [
													{}
												],
												"authentication": {
													"emailMethods": [
														{
															"@odata.type": "#microsoft.graph.emailAuthenticationMethod"
														}
													],
													"fido2Methods": [
														{
															"@odata.type": "#microsoft.graph.fido2AuthenticationMethod",
															"attestationCertificates": [
																null
															]
														}
													],
													"methods": [
														{}
													],
													"microsoftAuthenticatorMethods": [
														{
															"@odata.type": "#microsoft.graph.microsoftAuthenticatorAuthenticationMethod",
															"device": {
																"@odata.type": "#microsoft.graph.device",
																"alternativeSecurityIds": [
																	{}
																],
																"commands": [
																	{
																		"payload": {},
																		"responsepayload": {}
																	}
																],
																"extensionAttributes": {},
																"extensions": [
																	{}
																],
																"hostnames": [
																	null
																],
																"memberOf": [
																	{}
																],
																"physicalIds": [
																	null
																],
																"registeredOwners": [
																	{}
																],
																"registeredUsers": [
																	{}
																],
																"systemLabels": [
																	null
																],
																"transitiveMemberOf": [
																	{}
																],
																"usageRights": [
																	{}
																]
															}
														}
													],
													"operations": [
														{}
													],
													"passwordMethods": [
														{
															"@odata.type": "#microsoft.graph.passwordAuthenticationMethod"
														}
													],
													"passwordlessMicrosoftAuthenticatorMethods": [
														{
															"@odata.type": "#microsoft.graph.passwordlessMicrosoftAuthenticatorAuthenticationMethod",
															"device": {}
														}
													],
													"phoneMethods": [
														{
															"@odata.type": "#microsoft.graph.phoneAuthenticationMethod"
														}
													],
													"softwareOathMethods": [
														{
															"@odata.type": "#microsoft.graph.softwareOathAuthenticationMethod"
														}
													],
													"temporaryAccessPassMethods": [
														{
															"@odata.type": "#microsoft.graph.temporaryAccessPassAuthenticationMethod"
														}
													],
													"windowsHelloForBusinessMethods": [
														{
															"@odata.type": "#microsoft.graph.windowsHelloForBusinessAuthenticationMethod",
															"device": {}
														}
													]
												},
												"authorizationInfo": {
													"certificateUserIds": [
														null
													]
												},
												"businessPhones": [
													null
												],
												"calendar": {
													"allowedOnlineMeetingProviders": [
														null
													],
													"calendarPermissions": [
														{
															"allowedRoles": [
																null
															],
															"emailAddress": {},
															"role": {}
														}
													],
													"calendarView": [
														{
															"@odata.type": "#microsoft.graph.event",
															"categories": [
																null
															],
															"attachments": [
																{}
															],
															"attendees": [
																{
																	"@odata.type": "#microsoft.graph.attendee",
																	"emailAddress": {},
																	"proposedNewTime": {
																		"end": {},
																		"start": {}
																	},
																	"status": {}
																}
															],
															"body": {},
															"calendar": {},
															"cancelledOccurrences": [
																null
															],
															"end": {},
															"exceptionOccurrences": [
																{}
															],
															"extensions": [
																{}
															],
															"instances": [
																{}
															],
															"location": {
																"address": {},
																"coordinates": {}
															},
															"locations": [
																{}
															],
															"multiValueExtendedProperties": [
																{
																	"value": [
																		null
																	]
																}
															],
															"onlineMeeting": {
																"phones": [
																	{}
																],
																"tollFreeNumbers": [
																	null
																]
															},
															"onlineMeetingProvider": {},
															"organizer": {},
															"recurrence": {
																"pattern": {
																	"daysOfWeek": [
																		null
																	],
																	"firstDayOfWeek": {}
																},
																"range": {}
															},
															"responseStatus": {},
															"singleValueExtendedProperties": [
																{}
															],
															"start": {}
														}
													],
													"defaultOnlineMeetingProvider": {},
													"events": [
														{}
													],
													"multiValueExtendedProperties": [
														{}
													],
													"owner": {},
													"singleValueExtendedProperties": [
														{}
													]
												},
												"calendarGroups": [
													{
														"calendars": [
															{}
														]
													}
												],
												"calendarView": [
													{}
												],
												"calendars": [
													{}
												],
												"chats": [
													{
														"installedApps": [
															{
																"teamsApp": {
																	"appDefinitions": [
																		{
																			"bot": {},
																			"colorIcon": {
																				"hostedContent": {}
																			},
																			"createdBy": {},
																			"outlineIcon": {}
																		}
																	]
																},
																"teamsAppDefinition": {}
															}
														],
														"lastMessagePreview": {
															"body": {},
															"eventDetail": {},
															"from": {
																"@odata.type": "#microsoft.graph.chatMessageFromIdentitySet"
															}
														},
														"members": [
															{
																"roles": [
																	null
																]
															}
														],
														"messages": [
															{
																"attachments": [
																	{}
																],
																"body": {},
																"channelIdentity": {},
																"eventDetail": {},
																"from": {},
																"hostedContents": [
																	{
																		"@odata.type": "#microsoft.graph.chatMessageHostedContent"
																	}
																],
																"mentions": [
																	{
																		"mentioned": {
																			"@odata.type": "#microsoft.graph.chatMessageMentionedIdentitySet",
																			"conversation": {
																				"@odata.type": "#microsoft.graph.teamworkConversationIdentity"
																			},
																			"tag": {
																				"@odata.type": "#microsoft.graph.teamworkTagIdentity"
																			}
																		}
																	}
																],
																"messageHistory": [
																	{
																		"reaction": {
																			"user": {
																				"@odata.type": "#microsoft.graph.chatMessageReactionIdentitySet"
																			}
																		}
																	}
																],
																"messageType": {},
																"onBehalfOf": {},
																"policyViolation": {
																	"policyTip": {
																		"matchedConditionDescriptions": [
																			null
																		]
																	}
																},
																"reactions": [
																	{}
																],
																"replies": [
																	{}
																]
															}
														],
														"onlineMeetingInfo": {
															"organizer": {
																"@odata.type": "#microsoft.graph.teamworkUserIdentity"
															}
														},
														"operations": [
															{
																"error": {}
															}
														],
														"permissionGrants": [
															{
																"@odata.type": "#microsoft.graph.resourceSpecificPermissionGrant"
															}
														],
														"pinnedMessages": [
															{
																"message": {}
															}
														],
														"tabs": [
															{
																"configuration": {},
																"teamsApp": {}
															}
														],
														"viewpoint": {}
													}
												],
												"cloudPCs": [
													{
														"connectivityResult": {
															"failedHealthCheckItems": [
																{}
															]
														},
														"lastLoginResult": {},
														"lastRemoteActionResult": {
															"statusDetails": {
																"additionalInformation": [
																	{}
																]
															}
														},
														"partnerAgentInstallResults": [
															{}
														],
														"statusDetails": {}
													}
												],
												"contactFolders": [
													{
														"childFolders": [
															{}
														],
														"contacts": [
															{
																"@odata.type": "#microsoft.graph.contact",
																"children": [
																	null
																],
																"emailAddresses": [
																	{
																		"@odata.type": "#microsoft.graph.typedEmailAddress"
																	}
																],
																"extensions": [
																	{}
																],
																"flag": {
																	"completedDateTime": {},
																	"dueDateTime": {},
																	"startDateTime": {}
																},
																"imAddresses": [
																	null
																],
																"multiValueExtendedProperties": [
																	{}
																],
																"phones": [
																	{}
																],
																"photo": {},
																"postalAddresses": [
																	{}
																],
																"singleValueExtendedProperties": [
																	{}
																],
																"websites": [
																	{}
																]
															}
														],
														"multiValueExtendedProperties": [
															{}
														],
														"singleValueExtendedProperties": [
															{}
														]
													}
												],
												"contacts": [
													{}
												],
												"createdObjects": [
													{}
												],
												"customSecurityAttributes": {},
												"deviceEnrollmentConfigurations": [
													{
														"assignments": [
															{
																"target": {}
															}
														],
														"roleScopeTagIds": [
															null
														]
													}
												],
												"deviceKeys": [
													{}
												],
												"deviceManagementTroubleshootingEvents": [
													{
														"additionalInformation": [
															{}
														],
														"troubleshootingErrorDetails": {
															"resources": [
																{}
															]
														}
													}
												],
												"devices": [
													{}
												],
												"directReports": [
													{}
												],
												"drive": {
													"@odata.type": "#microsoft.graph.drive",
													"activities": [
														{
															"action": {
																"comment": {
																	"parentAuthor": {},
																	"participants": [
																		{}
																	]
																},
																"create": {},
																"delete": {},
																"edit": {},
																"mention": {
																	"mentionees": [
																		{}
																	]
																},
																"move": {},
																"rename": {},
																"restore": {},
																"share": {
																	"recipients": [
																		{}
																	]
																},
																"version": {}
															},
															"actor": {},
															"driveItem": {
																"@odata.type": "#microsoft.graph.driveItem",
																"activities": [
																	{}
																],
																"analytics": {
																	"allTime": {
																		"access": {},
																		"activities": [
																			{
																				"access": {},
																				"actor": {},
																				"driveItem": {}
																			}
																		],
																		"create": {},
																		"delete": {},
																		"edit": {},
																		"incompleteData": {},
																		"move": {}
																	},
																	"itemActivityStats": [
																		{}
																	],
																	"lastSevenDays": {}
																},
																"audio": {},
																"bundle": {
																	"album": {}
																},
																"children": [
																	{}
																],
																"deleted": {},
																"file": {
																	"hashes": {}
																},
																"fileSystemInfo": {},
																"folder": {
																	"view": {}
																},
																"image": {},
																"listItem": {
																	"@odata.type": "#microsoft.graph.listItem",
																	"activities": [
																		{}
																	],
																	"analytics": {},
																	"contentType": {},
																	"deleted": {},
																	"documentSetVersions": [
																		{
																			"@odata.type": "#microsoft.graph.documentSetVersion",
																			"lastModifiedBy": {},
																			"publication": {},
																			"fields": {},
																			"createdBy": {},
																			"items": [
																				{}
																			]
																		}
																	],
																	"driveItem": {},
																	"fields": {},
																	"sharepointIds": {},
																	"versions": [
																		{}
																	]
																},
																"location": {},
																"malware": {},
																"media": {
																	"mediaSource": {}
																},
																"package": {},
																"pendingOperations": {
																	"pendingContentUpdate": {}
																},
																"permissions": [
																	{
																		"grantedTo": {},
																		"grantedToIdentities": [
																			{}
																		],
																		"grantedToIdentitiesV2": [
																			{
																				"@odata.type": "#microsoft.graph.sharePointIdentitySet",
																				"group": {},
																				"siteGroup": {
																					"@odata.type": "#microsoft.graph.sharePointIdentity"
																				},
																				"siteUser": {}
																			}
																		],
																		"grantedToV2": {},
																		"inheritedFrom": {
																			"sharepointIds": {}
																		},
																		"invitation": {
																			"invitedBy": {}
																		},
																		"link": {
																			"application": {}
																		},
																		"roles": [
																			null
																		]
																	}
																],
																"photo": {},
																"publication": {},
																"remoteItem": {
																	"createdBy": {},
																	"file": {},
																	"fileSystemInfo": {},
																	"folder": {},
																	"image": {},
																	"lastModifiedBy": {},
																	"package": {},
																	"parentReference": {},
																	"shared": {
																		"owner": {},
																		"sharedBy": {}
																	},
																	"sharepointIds": {},
																	"specialFolder": {},
																	"video": {}
																},
																"root": {},
																"searchResult": {},
																"shared": {},
																"sharepointIds": {},
																"source": {},
																"specialFolder": {},
																"subscriptions": [
																	{}
																],
																"thumbnails": [
																	{
																		"large": {},
																		"medium": {},
																		"small": {},
																		"source": {}
																	}
																],
																"versions": [
																	{
																		"@odata.type": "#microsoft.graph.driveItemVersion"
																	}
																],
																"video": {},
																"workbook": {
																	"application": {},
																	"comments": [
																		{
																			"replies": [
																				{}
																			]
																		}
																	],
																	"functions": {},
																	"names": [
																		{
																			"value": {},
																			"worksheet": {
																				"charts": [
																					{
																						"axes": {
																							"categoryAxis": {
																								"format": {
																									"font": {},
																									"line": {}
																								},
																								"majorGridlines": {
																									"format": {
																										"line": {}
																									}
																								},
																								"majorUnit": {},
																								"maximum": {},
																								"minimum": {},
																								"minorGridlines": {},
																								"minorUnit": {},
																								"title": {
																									"format": {
																										"font": {}
																									}
																								}
																							},
																							"seriesAxis": {},
																							"valueAxis": {}
																						},
																						"dataLabels": {
																							"format": {
																								"fill": {},
																								"font": {}
																							}
																						},
																						"format": {
																							"fill": {},
																							"font": {}
																						},
																						"legend": {
																							"format": {
																								"fill": {},
																								"font": {}
																							}
																						},
																						"series": [
																							{
																								"format": {
																									"fill": {},
																									"line": {}
																								},
																								"points": [
																									{
																										"format": {
																											"fill": {}
																										},
																										"value": {}
																									}
																								]
																							}
																						],
																						"title": {
																							"format": {
																								"fill": {},
																								"font": {}
																							}
																						},
																						"worksheet": {}
																					}
																				],
																				"names": [
																					{}
																				],
																				"pivotTables": [
																					{
																						"worksheet": {}
																					}
																				],
																				"protection": {
																					"options": {}
																				},
																				"tables": [
																					{
																						"columns": [
																							{
																								"filter": {
																									"criteria": {
																										"icon": {},
																										"values": {}
																									}
																								},
																								"values": {}
																							}
																						],
																						"rows": [
																							{
																								"values": {}
																							}
																						],
																						"sort": {
																							"fields": [
																								{
																									"icon": {}
																								}
																							]
																						},
																						"worksheet": {}
																					}
																				]
																			}
																		}
																	],
																	"operations": [
																		{
																			"error": {
																				"innerError": {}
																			}
																		}
																	],
																	"tables": [
																		{}
																	],
																	"worksheets": [
																		{}
																	]
																}
															},
															"listItem": {},
															"times": {}
														}
													],
													"bundles": [
														{}
													],
													"following": [
														{}
													],
													"items": [
														{}
													],
													"list": {
														"@odata.type": "#microsoft.graph.list",
														"activities": [
															{}
														],
														"columns": [
															{
																"boolean": {},
																"calculated": {},
																"choice": {
																	"choices": [
																		null
																	]
																},
																"contentApprovalStatus": {},
																"currency": {},
																"dateTime": {},
																"defaultValue": {},
																"geolocation": {},
																"hyperlinkOrPicture": {},
																"lookup": {},
																"number": {},
																"personOrGroup": {},
																"sourceColumn": {},
																"sourceContentType": {},
																"term": {
																	"parentTerm": {
																		"children": [
																			{}
																		],
																		"descriptions": [
																			{}
																		],
																		"labels": [
																			{}
																		],
																		"properties": [
																			{}
																		],
																		"relations": [
																			{
																				"fromTerm": {},
																				"set": {
																					"children": [
																						{}
																					],
																					"localizedNames": [
																						{}
																					],
																					"parentGroup": {
																						"sets": [
																							{}
																						]
																					},
																					"properties": [
																						{}
																					],
																					"relations": [
																						{}
																					],
																					"terms": [
																						{}
																					]
																				},
																				"toTerm": {}
																			}
																		],
																		"set": {}
																	},
																	"termSet": {}
																},
																"text": {},
																"thumbnail": {},
																"validation": {
																	"descriptions": [
																		{}
																	]
																}
															}
														],
														"contentTypes": [
															{
																"associatedHubsUrls": [
																	null
																],
																"base": {},
																"baseTypes": [
																	{}
																],
																"columnLinks": [
																	{}
																],
																"columnPositions": [
																	{}
																],
																"columns": [
																	{}
																],
																"documentSet": {
																	"allowedContentTypes": [
																		{}
																	],
																	"defaultContents": [
																		{
																			"contentType": {}
																		}
																	],
																	"sharedColumns": [
																		{}
																	],
																	"welcomePageColumns": [
																		{}
																	]
																},
																"documentTemplate": {},
																"inheritedFrom": {},
																"order": {}
															}
														],
														"drive": {},
														"items": [
															{}
														],
														"list": {},
														"operations": [
															{
																"error": {
																	"details": [
																		{}
																	],
																	"innerError": {
																		"details": [
																			{}
																		]
																	}
																}
															}
														],
														"sharepointIds": {},
														"subscriptions": [
															{}
														],
														"system": {}
													},
													"owner": {},
													"quota": {
														"storagePlanInformation": {}
													},
													"root": {},
													"sharePointIds": {},
													"special": [
														{}
													],
													"system": {}
												},
												"drives": [
													{}
												],
												"employeeOrgData": {},
												"events": [
													{}
												],
												"extensions": [
													{}
												],
												"followedSites": [
													{}
												],
												"identities": [
													{}
												],
												"imAddresses": [
													null
												],
												"inferenceClassification": {
													"overrides": [
														{
															"senderEmailAddress": {}
														}
													]
												},
												"infoCatalogs": [
													null
												],
												"informationProtection": {
													"bitlocker": {
														"recoveryKeys": [
															{}
														]
													},
													"dataLossPreventionPolicies": [
														{}
													],
													"policy": {
														"labels": [
															{
																"parent": {
																	"parent": {}
																}
															}
														]
													},
													"sensitivityLabels": [
														{
															"assignedPolicies": [
																{}
															],
															"autoLabeling": {
																"sensitiveTypeIds": [
																	null
																]
															},
															"labelActions": [
																{}
															],
															"sublabels": [
																{}
															]
														}
													],
													"sensitivityPolicySettings": {
														"applicableTo": {}
													},
													"threatAssessmentRequests": [
														{
															"createdBy": {},
															"results": [
																{}
															]
														}
													]
												},
												"insights": {
													"shared": [
														{
															"lastShared": {
																"sharedBy": {},
																"sharingReference": {}
															},
															"lastSharedMethod": {},
															"resource": {},
															"resourceReference": {},
															"resourceVisualization": {},
															"sharingHistory": [
																{}
															]
														}
													],
													"trending": [
														{
															"resource": {},
															"resourceReference": {},
															"resourceVisualization": {}
														}
													],
													"used": [
														{
															"lastUsed": {},
															"resource": {},
															"resourceReference": {},
															"resourceVisualization": {}
														}
													]
												},
												"interests": [
													null
												],
												"joinedGroups": [
													{
														"@odata.type": "#microsoft.graph.group",
														"acceptedSenders": [
															{}
														],
														"appRoleAssignments": [
															{}
														],
														"assignedLabels": [
															{}
														],
														"assignedLicenses": [
															{}
														],
														"calendar": {},
														"calendarView": [
															{}
														],
														"conversations": [
															{
																"threads": [
																	{
																		"ccRecipients": [
																			{}
																		],
																		"posts": [
																			{
																				"@odata.type": "#microsoft.graph.post",
																				"attachments": [
																					{}
																				],
																				"body": {},
																				"extensions": [
																					{}
																				],
																				"from": {},
																				"importance": {},
																				"inReplyTo": {},
																				"mentions": [
																					{
																						"createdBy": {},
																						"mentioned": {}
																					}
																				],
																				"multiValueExtendedProperties": [
																					{}
																				],
																				"newParticipants": [
																					{}
																				],
																				"sender": {},
																				"singleValueExtendedProperties": [
																					{}
																				]
																			}
																		],
																		"toRecipients": [
																			{}
																		],
																		"uniqueSenders": [
																			null
																		]
																	}
																],
																"uniqueSenders": [
																	null
																]
															}
														],
														"createdOnBehalfOf": {},
														"drive": {},
														"drives": [
															{}
														],
														"endpoints": [
															{}
														],
														"events": [
															{}
														],
														"extensions": [
															{}
														],
														"groupLifecyclePolicies": [
															{}
														],
														"groupTypes": [
															null
														],
														"infoCatalogs": [
															null
														],
														"licenseProcessingState": {},
														"memberOf": [
															{}
														],
														"members": [
															{}
														],
														"membersWithLicenseErrors": [
															{}
														],
														"membershipRuleProcessingStatus": {},
														"onPremisesProvisioningErrors": [
															{}
														],
														"onenote": {
															"notebooks": [
																{
																	"@odata.type": "#microsoft.graph.notebook",
																	"createdBy": {},
																	"lastModifiedBy": {},
																	"links": {
																		"oneNoteClientUrl": {},
																		"oneNoteWebUrl": {}
																	},
																	"sectionGroups": [
																		{
																			"@odata.type": "#microsoft.graph.sectionGroup",
																			"parentNotebook": {},
																			"parentSectionGroup": {},
																			"sectionGroups": [
																				{}
																			],
																			"sections": [
																				{
																					"@odata.type": "#microsoft.graph.onenoteSection",
																					"links": {
																						"oneNoteClientUrl": {},
																						"oneNoteWebUrl": {}
																					},
																					"pages": [
																						{
																							"@odata.type": "#microsoft.graph.onenotePage",
																							"links": {
																								"oneNoteClientUrl": {},
																								"oneNoteWebUrl": {}
																							},
																							"parentNotebook": {},
																							"parentSection": {},
																							"userTags": [
																								null
																							]
																						}
																					],
																					"parentNotebook": {},
																					"parentSectionGroup": {}
																				}
																			]
																		}
																	],
																	"sections": [
																		{}
																	]
																}
															],
															"operations": [
																{
																	"error": {}
																}
															],
															"pages": [
																{}
															],
															"resources": [
																{
																	"@odata.type": "#microsoft.graph.onenoteResource"
																}
															],
															"sectionGroups": [
																{}
															],
															"sections": [
																{}
															]
														},
														"owners": [
															{}
														],
														"permissionGrants": [
															{}
														],
														"photo": {},
														"photos": [
															{}
														],
														"planner": {
															"plans": [
																{
																	"buckets": [
																		{
																			"creationSource": {},
																			"tasks": [
																				{
																					"appliedCategories": {},
																					"assignedToTaskBoardFormat": {
																						"orderHintsByAssignee": {}
																					},
																					"assignments": {},
																					"bucketTaskBoardFormat": {},
																					"completedBy": {},
																					"createdBy": {},
																					"creationSource": {
																						"creationSourceKind": {},
																						"teamsPublicationInfo": {
																							"@odata.type": "#microsoft.graph.plannerTeamsPublicationInfo"
																						}
																					},
																					"details": {
																						"checklist": {},
																						"notes": {},
																						"references": {}
																					},
																					"previewType": {},
																					"progressTaskBoardFormat": {},
																					"recurrence": {
																						"schedule": {
																							"pattern": {}
																						}
																					}
																				}
																			]
																		}
																	],
																	"container": {},
																	"contexts": {},
																	"createdBy": {},
																	"creationSource": {
																		"creationSourceKind": {}
																	},
																	"details": {
																		"categoryDescriptions": {},
																		"contextDetails": {},
																		"sharedWith": {}
																	},
																	"sharedWithContainers": [
																		{
																			"@odata.type": "#microsoft.graph.plannerSharedWithContainer"
																		}
																	],
																	"tasks": [
																		{}
																	]
																}
															]
														},
														"proxyAddresses": [
															null
														],
														"rejectedSenders": [
															{}
														],
														"resourceBehaviorOptions": [
															null
														],
														"resourceProvisioningOptions": [
															null
														],
														"settings": [
															{
																"values": [
																	{}
																]
															}
														],
														"sites": [
															{}
														],
														"team": {
															"allChannels": [
																{
																	"filesFolder": {},
																	"members": [
																		{}
																	],
																	"messages": [
																		{}
																	],
																	"moderationSettings": {},
																	"sharedWithTeams": [
																		{
																			"team": {},
																			"allowedMembers": [
																				{}
																			]
																		}
																	],
																	"summary": {},
																	"tabs": [
																		{}
																	]
																}
															],
															"channels": [
																{}
															],
															"discoverySettings": {},
															"funSettings": {},
															"group": {},
															"guestSettings": {},
															"incomingChannels": [
																{}
															],
															"installedApps": [
																{}
															],
															"memberSettings": {},
															"members": [
																{}
															],
															"messagingSettings": {},
															"operations": [
																{}
															],
															"owners": [
																{}
															],
															"permissionGrants": [
																{}
															],
															"photo": {},
															"primaryChannel": {},
															"schedule": {
																"offerShiftRequests": [
																	{
																		"@odata.type": "#microsoft.graph.offerShiftRequest",
																		"createdBy": {},
																		"lastModifiedBy": {}
																	}
																],
																"openShiftChangeRequests": [
																	{
																		"@odata.type": "#microsoft.graph.openShiftChangeRequest"
																	}
																],
																"openShifts": [
																	{
																		"@odata.type": "#microsoft.graph.openShift",
																		"draftOpenShift": {
																			"@odata.type": "#microsoft.graph.openShiftItem",
																			"activities": [
																				{
																					"theme": {}
																				}
																			]
																		},
																		"sharedOpenShift": {}
																	}
																],
																"provisionStatus": {},
																"schedulingGroups": [
																	{
																		"@odata.type": "#microsoft.graph.schedulingGroup",
																		"userIds": [
																			null
																		]
																	}
																],
																"shifts": [
																	{
																		"@odata.type": "#microsoft.graph.shift",
																		"draftShift": {},
																		"sharedShift": {}
																	}
																],
																"swapShiftsChangeRequests": [
																	{
																		"@odata.type": "#microsoft.graph.swapShiftsChangeRequest"
																	}
																],
																"timeCards": [
																	{
																		"@odata.type": "#microsoft.graph.timeCard",
																		"breaks": [
																			{
																				"end": {
																					"notes": {}
																				},
																				"notes": {},
																				"start": {}
																			}
																		],
																		"clockInEvent": {},
																		"clockOutEvent": {},
																		"notes": {},
																		"originalEntry": {
																			"breaks": [
																				{}
																			],
																			"clockInEvent": {},
																			"clockOutEvent": {}
																		}
																	}
																],
																"timeClockSettings": {
																	"approvedLocation": {}
																},
																"timeOffReasons": [
																	{
																		"@odata.type": "#microsoft.graph.timeOffReason"
																	}
																],
																"timeOffRequests": [
																	{
																		"@odata.type": "#microsoft.graph.timeOffRequest"
																	}
																],
																"timesOff": [
																	{
																		"@odata.type": "#microsoft.graph.timeOff",
																		"draftTimeOff": {},
																		"sharedTimeOff": {}
																	}
																],
																"workforceIntegrationIds": [
																	null
																]
															},
															"summary": {},
															"tags": [
																{
																	"members": [
																		{}
																	]
																}
															],
															"template": {},
															"templateDefinition": {
																"categories": [
																	null
																],
																"lastModifiedBy": {},
																"teamDefinition": {}
															}
														},
														"threads": [
															{}
														],
														"transitiveMemberOf": [
															{}
														],
														"transitiveMembers": [
															{}
														],
														"writebackConfiguration": {}
													}
												],
												"joinedTeams": [
													{}
												],
												"licenseAssignmentStates": [
													{
														"disabledPlans": [
															null
														]
													}
												],
												"licenseDetails": [
													{}
												],
												"mailFolders": [
													{
														"childFolders": [
															{}
														],
														"messageRules": [
															{
																"actions": {
																	"assignCategories": [
																		null
																	],
																	"forwardAsAttachmentTo": [
																		{}
																	],
																	"forwardTo": [
																		{}
																	],
																	"markImportance": {},
																	"redirectTo": [
																		{}
																	]
																},
																"conditions": {
																	"bodyContains": [
																		null
																	],
																	"bodyOrSubjectContains": [
																		null
																	],
																	"categories": [
																		null
																	],
																	"fromAddresses": [
																		{}
																	],
																	"headerContains": [
																		null
																	],
																	"importance": {},
																	"recipientContains": [
																		null
																	],
																	"senderContains": [
																		null
																	],
																	"sensitivity": {},
																	"sentToAddresses": [
																		{}
																	],
																	"subjectContains": [
																		null
																	],
																	"withinSizeRange": {}
																},
																"exceptions": {}
															}
														],
														"messages": [
															{
																"@odata.type": "#microsoft.graph.message",
																"attachments": [
																	{}
																],
																"bccRecipients": [
																	{}
																],
																"body": {},
																"ccRecipients": [
																	{}
																],
																"extensions": [
																	{}
																],
																"flag": {},
																"from": {},
																"importance": {},
																"inferenceClassification": {},
																"internetMessageHeaders": [
																	{}
																],
																"mentions": [
																	{}
																],
																"mentionsPreview": {},
																"multiValueExtendedProperties": [
																	{}
																],
																"replyTo": [
																	{}
																],
																"sender": {},
																"singleValueExtendedProperties": [
																	{}
																],
																"toRecipients": [
																	{}
																],
																"uniqueBody": {},
																"unsubscribeData": [
																	null
																]
															}
														],
														"multiValueExtendedProperties": [
															{}
														],
														"singleValueExtendedProperties": [
															{}
														],
														"userConfigurations": [
															{}
														]
													}
												],
												"mailboxSettings": {
													"automaticRepliesSetting": {
														"scheduledEndDateTime": {},
														"scheduledStartDateTime": {}
													},
													"language": {},
													"workingHours": {
														"daysOfWeek": [
															{}
														],
														"timeZone": {}
													}
												},
												"managedAppRegistrations": [
													{
														"appIdentifier": {},
														"appliedPolicies": [
															{
																"roleScopeTagIds": [
																	null
																]
															}
														],
														"flaggedReasons": [
															null
														],
														"intendedPolicies": [
															{}
														],
														"operations": [
															{}
														]
													}
												],
												"managedDevices": [
													{
														"assignmentFilterEvaluationStatusDetails": [
															{}
														],
														"chromeOSDeviceInfo": [
															{}
														],
														"cloudPcRemoteActionResults": [
															{}
														],
														"configurationManagerClientEnabledFeatures": {},
														"configurationManagerClientHealthState": {},
														"configurationManagerClientInformation": {},
														"detectedApps": [
															{
																"managedDevices": [
																	{}
																]
															}
														],
														"deviceActionResults": [
															{
																"actionState": {}
															}
														],
														"deviceCategory": {
															"roleScopeTagIds": [
																null
															]
														},
														"deviceCompliancePolicyStates": [
															{
																"settingStates": [
																	{
																		"sources": [
																			{}
																		]
																	}
																],
																"state": {}
															}
														],
														"deviceConfigurationStates": [
															{
																"platformType": {},
																"settingStates": [
																	{
																		"sources": [
																			{}
																		],
																		"state": {}
																	}
																],
																"state": {}
															}
														],
														"deviceHealthAttestationState": {},
														"deviceHealthScriptStates": [
															{
																"assignmentFilterIds": [
																	null
																]
															}
														],
														"hardwareInformation": {
															"sharedDeviceCachedUsers": [
																{}
															],
															"wiredIPv4Addresses": [
																null
															]
														},
														"logCollectionRequests": [
															{}
														],
														"managedDeviceMobileAppConfigurationStates": [
															{
																"platformType": {},
																"settingStates": [
																	{
																		"sources": [
																			{}
																		],
																		"state": {}
																	}
																],
																"state": {}
															}
														],
														"roleScopeTagIds": [
															null
														],
														"securityBaselineStates": [
															{
																"settingStates": [
																	{
																		"contributingPolicies": [
																			{}
																		],
																		"sourcePolicies": [
																			{}
																		]
																	}
																],
																"state": {}
															}
														],
														"users": [
															{}
														],
														"usersLoggedOn": [
															{}
														],
														"windowsProtectionState": {
															"detectedMalwareState": [
																{}
															]
														}
													}
												],
												"manager": {},
												"memberOf": [
													{}
												],
												"messages": [
													{}
												],
												"mobileAppIntentAndStates": [
													{
														"mobileAppList": [
															{
																"supportedDeviceTypes": [
																	{
																		"type": {}
																	}
																]
															}
														]
													}
												],
												"mobileAppTroubleshootingEvents": [
													{
														"appLogCollectionRequests": [
															{
																"customLogFolders": [
																	null
																]
															}
														],
														"history": [
															{
																"troubleshootingErrorDetails": {}
															}
														]
													}
												],
												"notifications": [
													{
														"payload": {
															"visualContent": {}
														},
														"targetPolicy": {
															"platformTypes": [
																null
															]
														}
													}
												],
												"oauth2PermissionGrants": [
													{}
												],
												"onPremisesExtensionAttributes": {},
												"onPremisesProvisioningErrors": [
													{}
												],
												"onenote": {},
												"onlineMeetings": [
													{
														"anonymizeIdentityForRoles": [
															null
														],
														"attendanceReports": [
															{
																"attendanceRecords": [
																	{
																		"attendanceIntervals": [
																			{}
																		],
																		"identity": {}
																	}
																]
															}
														],
														"audioConferencing": {
															"tollFreeNumbers": [
																null
															],
															"tollNumbers": [
																null
															]
														},
														"broadcastSettings": {
															"captions": {
																"translationLanguages": [
																	null
																]
															}
														},
														"capabilities": [
															null
														],
														"chatInfo": {},
														"joinInformation": {},
														"joinMeetingIdSettings": {},
														"lobbyBypassSettings": {},
														"meetingAttendanceReport": {},
														"participants": {
															"attendees": [
																{
																	"identity": {},
																	"role": {}
																}
															],
															"contributors": [
																{}
															],
															"organizer": {},
															"producers": [
																{}
															]
														},
														"registration": {
															"@odata.type": "#microsoft.graph.meetingRegistration",
															"registrants": [
																{}
															],
															"customQuestions": [
																{
																	"answerOptions": [
																		null
																	]
																}
															],
															"speakers": [
																{}
															]
														},
														"transcripts": [
															{}
														],
														"virtualAppointment": {
															"appointmentClients": [
																{}
															],
															"settings": {}
														},
														"watermarkProtection": {}
													}
												],
												"otherMails": [
													null
												],
												"outlook": {
													"masterCategories": [
														{}
													],
													"taskFolders": [
														{
															"multiValueExtendedProperties": [
																{}
															],
															"singleValueExtendedProperties": [
																{}
															],
															"tasks": [
																{
																	"@odata.type": "#microsoft.graph.outlookTask",
																	"attachments": [
																		{}
																	],
																	"body": {},
																	"completedDateTime": {},
																	"dueDateTime": {},
																	"importance": {},
																	"multiValueExtendedProperties": [
																		{}
																	],
																	"recurrence": {},
																	"reminderDateTime": {},
																	"sensitivity": {},
																	"singleValueExtendedProperties": [
																		{}
																	],
																	"startDateTime": {}
																}
															]
														}
													],
													"taskGroups": [
														{
															"taskFolders": [
																{}
															]
														}
													],
													"tasks": [
														{}
													]
												},
												"ownedDevices": [
													{}
												],
												"ownedObjects": [
													{}
												],
												"passwordProfile": {},
												"pastProjects": [
													null
												],
												"pendingAccessReviewInstances": [
													{
														"contactedReviewers": [
															{}
														],
														"decisions": [
															{
																"appliedBy": {
																	"@odata.type": "#microsoft.graph.userIdentity"
																},
																"insights": [
																	{}
																],
																"instance": {},
																"principal": {},
																"principalResourceMembership": {},
																"resource": {},
																"reviewedBy": {},
																"target": {}
															}
														],
														"definition": {
															"additionalNotificationRecipients": [
																{
																	"notificationRecipientScope": {}
																}
															],
															"backupReviewers": [
																{
																	"@odata.type": "#microsoft.graph.accessReviewReviewerScope"
																}
															],
															"createdBy": {},
															"fallbackReviewers": [
																{}
															],
															"instanceEnumerationScope": {},
															"instances": [
																{}
															],
															"reviewers": [
																{}
															],
															"scope": {},
															"settings": {
																"applyActions": [
																	{}
																],
																"recommendationInsightSettings": [
																	{}
																],
																"recurrence": {}
															},
															"stageSettings": [
																{
																	"decisionsThatWillMoveToNextStage": [
																		null
																	],
																	"dependsOn": [
																		null
																	],
																	"fallbackReviewers": [
																		{}
																	],
																	"recommendationInsightSettings": [
																		{}
																	],
																	"reviewers": [
																		{}
																	]
																}
															]
														},
														"errors": [
															{
																"@odata.type": "#microsoft.graph.accessReviewError"
															}
														],
														"fallbackReviewers": [
															{}
														],
														"reviewers": [
															{}
														],
														"scope": {},
														"stages": [
															{
																"decisions": [
																	{}
																],
																"fallbackReviewers": [
																	{}
																],
																"reviewers": [
																	{}
																]
															}
														]
													}
												],
												"people": [
													{
														"emailAddresses": [
															{}
														],
														"phones": [
															{}
														],
														"postalAddresses": [
															{}
														],
														"sources": [
															{}
														],
														"websites": [
															{}
														]
													}
												],
												"photo": {},
												"photos": [
													{}
												],
												"planner": {
													"all": [
														{}
													],
													"favoritePlanReferences": {},
													"favoritePlans": [
														{}
													],
													"plans": [
														{}
													],
													"recentPlanReferences": {},
													"recentPlans": [
														{}
													],
													"rosterPlans": [
														{}
													],
													"tasks": [
														{}
													]
												},
												"presence": {
													"outOfOfficeSettings": {},
													"statusMessage": {
														"expiryDateTime": {},
														"message": {}
													}
												},
												"print": {
													"recentPrinterShares": [
														{
															"@odata.type": "#microsoft.graph.printerShare",
															"capabilities": {
																"bottomMargins": [
																	null
																],
																"colorModes": [
																	null
																],
																"contentTypes": [
																	null
																],
																"copiesPerJob": {},
																"dpis": [
																	null
																],
																"duplexModes": [
																	null
																],
																"feedDirections": [
																	null
																],
																"feedOrientations": [
																	null
																],
																"finishings": [
																	null
																],
																"inputBins": [
																	null
																],
																"leftMargins": [
																	null
																],
																"mediaColors": [
																	null
																],
																"mediaSizes": [
																	null
																],
																"mediaTypes": [
																	null
																],
																"multipageLayouts": [
																	null
																],
																"orientations": [
																	null
																],
																"outputBins": [
																	null
																],
																"pagesPerSheet": [
																	null
																],
																"qualities": [
																	null
																],
																"rightMargins": [
																	null
																],
																"scalings": [
																	null
																],
																"supportedColorConfigurations": [
																	null
																],
																"supportedCopiesPerJob": {},
																"supportedDocumentMimeTypes": [
																	null
																],
																"supportedDuplexConfigurations": [
																	null
																],
																"supportedFinishings": [
																	{}
																],
																"supportedMediaColors": [
																	null
																],
																"supportedMediaSizes": [
																	null
																],
																"supportedMediaTypes": [
																	null
																],
																"supportedOrientations": [
																	{}
																],
																"supportedOutputBins": [
																	null
																],
																"supportedPagesPerSheet": {},
																"supportedPresentationDirections": [
																	null
																],
																"supportedPrintQualities": [
																	{}
																],
																"topMargins": [
																	null
																]
															},
															"defaults": {
																"colorMode": {},
																"duplexConfiguration": {},
																"duplexMode": {},
																"finishings": [
																	{}
																],
																"multipageLayout": {},
																"orientation": {},
																"presentationDirection": {},
																"printColorConfiguration": {},
																"printQuality": {},
																"quality": {},
																"scaling": {}
															},
															"jobs": [
																{
																	"configuration": {
																		"colorMode": {},
																		"duplexMode": {},
																		"feedOrientation": {},
																		"finishings": [
																			{}
																		],
																		"margin": {},
																		"multipageLayout": {},
																		"orientation": {},
																		"pageRanges": [
																			{}
																		],
																		"quality": {},
																		"scaling": {}
																	},
																	"createdBy": {},
																	"documents": [
																		{
																			"configuration": {
																				"colorMode": {},
																				"duplexMode": {},
																				"feedDirection": {},
																				"feedOrientation": {},
																				"finishings": [
																					{}
																				],
																				"margin": {},
																				"multipageLayout": {},
																				"orientation": {},
																				"pageRanges": [
																					{}
																				],
																				"quality": {},
																				"scaling": {}
																			}
																		}
																	],
																	"status": {
																		"details": [
																			null
																		],
																		"state": {}
																	},
																	"tasks": [
																		{
																			"definition": {
																				"createdBy": {},
																				"tasks": [
																					{}
																				]
																			},
																			"status": {},
																			"trigger": {
																				"definition": {}
																			}
																		}
																	]
																}
															],
															"location": {
																"organization": [
																	null
																],
																"subdivision": [
																	null
																],
																"subunit": [
																	null
																]
															},
															"status": {
																"details": [
																	null
																],
																"processingStateReasons": [
																	null
																],
																"state": {}
															},
															"allowedGroups": [
																{}
															],
															"allowedUsers": [
																{}
															],
															"printer": {
																"@odata.type": "#microsoft.graph.printer",
																"connectors": [
																	{
																		"deviceHealth": {},
																		"location": {}
																	}
																],
																"share": {},
																"shares": [
																	{}
																],
																"taskTriggers": [
																	{}
																]
															},
															"viewPoint": {}
														}
													]
												},
												"profile": {
													"account": [
														{
															"@odata.type": "#microsoft.graph.userAccountInformation",
															"createdBy": {},
															"inference": {},
															"lastModifiedBy": {},
															"source": {
																"type": [
																	null
																]
															},
															"preferredLanguageTag": {}
														}
													],
													"addresses": [
														{
															"@odata.type": "#microsoft.graph.itemAddress",
															"detail": {},
															"geoCoordinates": {}
														}
													],
													"anniversaries": [
														{
															"@odata.type": "#microsoft.graph.personAnnualEvent"
														}
													],
													"awards": [
														{
															"@odata.type": "#microsoft.graph.personAward"
														}
													],
													"certifications": [
														{
															"@odata.type": "#microsoft.graph.personCertification"
														}
													],
													"educationalActivities": [
														{
															"@odata.type": "#microsoft.graph.educationalActivity",
															"institution": {
																"location": {}
															},
															"program": {
																"activities": [
																	null
																],
																"awards": [
																	null
																],
																"fieldsOfStudy": [
																	null
																]
															}
														}
													],
													"emails": [
														{
															"@odata.type": "#microsoft.graph.itemEmail",
															"type": {}
														}
													],
													"interests": [
														{
															"@odata.type": "#microsoft.graph.personInterest",
															"categories": [
																null
															],
															"collaborationTags": [
																null
															]
														}
													],
													"languages": [
														{
															"@odata.type": "#microsoft.graph.languageProficiency",
															"reading": {},
															"spoken": {},
															"written": {}
														}
													],
													"names": [
														{
															"@odata.type": "#microsoft.graph.personName",
															"pronunciation": {}
														}
													],
													"notes": [
														{
															"@odata.type": "#microsoft.graph.personAnnotation",
															"detail": {}
														}
													],
													"patents": [
														{
															"@odata.type": "#microsoft.graph.itemPatent"
														}
													],
													"phones": [
														{
															"@odata.type": "#microsoft.graph.itemPhone",
															"type": {}
														}
													],
													"positions": [
														{
															"@odata.type": "#microsoft.graph.workPosition",
															"categories": [
																null
															],
															"colleagues": [
																{}
															],
															"detail": {
																"company": {
																	"address": {}
																}
															},
															"manager": {}
														}
													],
													"projects": [
														{
															"@odata.type": "#microsoft.graph.projectParticipation",
															"categories": [
																null
															],
															"client": {},
															"collaborationTags": [
																null
															],
															"colleagues": [
																{}
															],
															"detail": {},
															"sponsors": [
																{}
															]
														}
													],
													"publications": [
														{
															"@odata.type": "#microsoft.graph.itemPublication"
														}
													],
													"skills": [
														{
															"@odata.type": "#microsoft.graph.skillProficiency",
															"categories": [
																null
															],
															"collaborationTags": [
																null
															]
														}
													],
													"webAccounts": [
														{
															"@odata.type": "#microsoft.graph.webAccount",
															"service": {}
														}
													],
													"websites": [
														{
															"@odata.type": "#microsoft.graph.personWebsite",
															"categories": [
																null
															]
														}
													]
												},
												"provisionedPlans": [
													{}
												],
												"proxyAddresses": [
													null
												],
												"registeredDevices": [
													{}
												],
												"responsibilities": [
													null
												],
												"schools": [
													null
												],
												"scopedRoleMemberOf": [
													{
														"roleMemberInfo": {}
													}
												],
												"security": {
													"informationProtection": {
														"labelPolicySettings": {},
														"sensitivityLabels": [
															{
																"contentFormats": [
																	null
																],
																"parent": {}
															}
														]
													}
												},
												"settings": {
													"contactMergeSuggestions": {},
													"itemInsights": {},
													"regionalAndLanguageSettings": {
														"authoringLanguages": [
															{}
														],
														"defaultDisplayLanguage": {},
														"defaultRegionalFormat": {},
														"defaultSpeechInputLanguage": {},
														"defaultTranslationLanguage": {},
														"regionalFormatOverrides": {},
														"translationPreferences": {
															"languageOverrides": [
																{}
															],
															"translationBehavior": {},
															"untranslatedLanguages": [
																null
															]
														}
													},
													"shiftPreferences": {
														"@odata.type": "#microsoft.graph.shiftPreferences",
														"availability": [
															{
																"recurrence": {},
																"timeSlots": [
																	{}
																]
															}
														]
													}
												},
												"signInActivity": {},
												"skills": [
													null
												],
												"teamwork": {
													"associatedTeams": [
														{}
													],
													"installedApps": [
														{
															"@odata.type": "#microsoft.graph.userScopeTeamsAppInstallation",
															"chat": {}
														}
													]
												},
												"todo": {
													"lists": [
														{
															"extensions": [
																{}
															],
															"tasks": [
																{
																	"attachmentSessions": [
																		{
																			"nextExpectedRanges": [
																				null
																			]
																		}
																	],
																	"attachments": [
																		{}
																	],
																	"body": {},
																	"categories": [
																		null
																	],
																	"checklistItems": [
																		{}
																	],
																	"completedDateTime": {},
																	"dueDateTime": {},
																	"extensions": [
																		{}
																	],
																	"importance": {},
																	"linkedResources": [
																		{}
																	],
																	"recurrence": {},
																	"reminderDateTime": {},
																	"startDateTime": {},
																	"status": {}
																}
															]
														}
													]
												},
												"transitiveMemberOf": [
													{}
												],
												"transitiveReports": [
													{}
												],
												"usageRights": [
													{}
												],
												"windowsInformationProtectionDeviceRegistrations": [
													{}
												]
											},
											"lastModifiedBy": {},
											"lastModifiedByUser": {},
											"parentReference": {},
											"analytics": {},
											"columns": [
												{}
											],
											"contentTypes": [
												{}
											],
											"deleted": {},
											"drive": {},
											"drives": [
												{}
											],
											"externalColumns": [
												{}
											],
											"informationProtection": {},
											"items": [
												{}
											],
											"lists": [
												{}
											],
											"onenote": {},
											"operations": [
												{}
											],
											"pages": [
												{
													"@odata.type": "#microsoft.graph.sitePage",
													"canvasLayout": {
														"horizontalSections": [
															{
																"columns": [
																	{
																		"webparts": [
																			{}
																		]
																	}
																]
															}
														],
														"verticalSection": {
															"emphasis": {},
															"webparts": [
																{}
															]
														}
													},
													"contentType": {},
													"publishingState": {},
													"reactions": {},
													"titleArea": {
														"serverProcessedContent": {
															"componentDependencies": [
																{}
															],
															"customMetadata": [
																{
																	"value": {}
																}
															],
															"htmlStrings": [
																{}
															],
															"imageSources": [
																{}
															],
															"links": [
																{}
															],
															"searchablePlainTexts": [
																{}
															]
														}
													},
													"webParts": [
														{}
													]
												}
											],
											"permissions": [
												{}
											],
											"root": {},
											"settings": {},
											"sharepointIds": {},
											"siteCollection": {
												"root": {}
											},
											"sites": [
												{}
											],
											"termStore": {
												"groups": [
													{}
												],
												"languageTags": [
													null
												],
												"sets": [
													{}
												]
											}
										}
									}
								],
								"unifiedGroupSources": [
									{
										"@odata.type": "#microsoft.graph.ediscovery.unifiedGroupSource",
										"group": {}
									}
								],
								"userSources": [
									{
										"@odata.type": "#microsoft.graph.ediscovery.userSource",
										"includedSources": {}
									}
								]
							}
						],
						"lastModifiedBy": {},
						"legalHolds": [
							{
								"createdBy": {},
								"errors": [
									null
								],
								"lastModifiedBy": {},
								"siteSources": [
									{}
								],
								"unifiedGroupSources": [
									{}
								],
								"userSources": [
									{}
								]
							}
						],
						"noncustodialDataSources": [
							{
								"@odata.type": "#microsoft.graph.ediscovery.noncustodialDataSource",
								"dataSource": {}
							}
						],
						"operations": [
							{}
						],
						"reviewSets": [
							{
								"createdBy": {},
								"queries": [
									{
										"createdBy": {},
										"lastModifiedBy": {}
									}
								]
							}
						],
						"settings": {
							"ocr": {},
							"redundancyDetection": {},
							"topicModeling": {}
						},
						"sourceCollections": [
							{
								"addToReviewSetOperation": {
									"reviewSet": {},
									"sourceCollection": {}
								},
								"additionalSources": [
									{}
								],
								"createdBy": {},
								"custodianSources": [
									{}
								],
								"lastEstimateStatisticsOperation": {
									"sourceCollection": {}
								},
								"lastModifiedBy": {},
								"noncustodialSources": [
									{}
								]
							}
						],
						"tags": [
							{
								"childTags": [
									{}
								],
								"createdBy": {},
								"parent": {}
							}
						]
					}
				]
			},
			"routing": {
				"send": {
					"property": "ediscovery",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance Compliance"
					],
					"operation": [
						"Compliance Compliance Update Compliance"
					]
				}
			}
		},
];

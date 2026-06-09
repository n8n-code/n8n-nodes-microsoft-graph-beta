import type { INodeProperties } from 'n8n-workflow';

export const securityActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					]
				}
			},
			"options": [
				{
					"name": "Security Alerts Update Alerts",
					"value": "Security Alerts Update Alerts",
					"action": "Invoke action updateAlerts",
					"description": "Update multiple alerts in one request instead of multiple requests.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/alerts/microsoft.graph.updateAlerts"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Custodians Apply Hold",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Custodians Apply Hold",
					"action": "Invoke action applyHold",
					"description": "Start the process of applying hold on eDiscovery custodians. After the operation is created, you can get the status by retrieving the `Location` parameter from the response headers. The location provides a URL that will return an eDiscoveryHoldOperation object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/microsoft.graph.security.applyHold"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Custodians Remove Hold",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Custodians Remove Hold",
					"action": "Invoke action removeHold",
					"description": "Start the process of removing hold from eDiscovery custodians. After the operation is created, you can get the status by retrieving the `Location` parameter from the response headers. The location provides a URL that will return an eDiscoveryHoldOperation object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/microsoft.graph.security.removeHold"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Activate",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Activate",
					"action": "Invoke action activate",
					"description": "Activate a custodian that has been released from a case to make them part of the case again. For details, see Manage custodians in an eDiscovery (Premium) case.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/microsoft.graph.security.activate"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Apply Hold",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Apply Hold",
					"action": "Invoke action applyHold",
					"description": "Start the process of applying hold on eDiscovery custodians. After the operation is created, you can get the status by retrieving the `Location` parameter from the response headers. The location provides a URL that will return an eDiscoveryHoldOperation object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/microsoft.graph.security.applyHold"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Release",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Release",
					"action": "Invoke action release",
					"description": "Release a custodian from a case. For details, see Release a custodian from a case.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/microsoft.graph.security.release"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Remove Hold",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Remove Hold",
					"action": "Invoke action removeHold",
					"description": "Start the process of removing hold from eDiscovery custodians. After the operation is created, you can get the status by retrieving the `Location` parameter from the response headers. The location provides a URL that will return an eDiscoveryHoldOperation object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/microsoft.graph.security.removeHold"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Update Index",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Update Index",
					"action": "Invoke action updateIndex",
					"description": "Trigger an indexOperation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/custodians/{{$parameter[\"ediscoveryCustodian-id\"]}}/microsoft.graph.security.updateIndex"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Close",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Close",
					"action": "Invoke action close",
					"description": "Close an eDiscovery case. For details, see Close a case.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/microsoft.graph.security.close"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Reopen",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Reopen",
					"action": "Invoke action reopen",
					"description": "Reopen an eDiscovery case that was closed. For details, see Reopen a closed case.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/microsoft.graph.security.reopen"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Apply Hold",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Apply Hold",
					"action": "Invoke action applyHold",
					"description": "Start the process of applying hold on eDiscovery non-custodial data sources. After the operation is created, you can get the status by retrieving the `Location` parameter from the response headers. The location provides a URL that will return an eDiscoveryHoldOperation object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources/microsoft.graph.security.applyHold"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Remove Hold",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Remove Hold",
					"action": "Invoke action removeHold",
					"description": "Start the process of removing hold from eDiscovery non-custodial data sources. After the operation is created, you can get the status by retrieving the `Location` parameter from the response headers. The location provides a URL that will return an eDiscoveryHoldOperation object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources/microsoft.graph.security.removeHold"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Ediscovery Noncustodial Data Source Apply Hold",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Ediscovery Noncustodial Data Source Apply Hold",
					"action": "Invoke action applyHold",
					"description": "Start the process of applying hold on eDiscovery non-custodial data sources. After the operation is created, you can get the status by retrieving the `Location` parameter from the response headers. The location provides a URL that will return an eDiscoveryHoldOperation object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources/{{$parameter[\"ediscoveryNoncustodialDataSource-id\"]}}/microsoft.graph.security.applyHold"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Ediscovery Noncustodial Data Source Release",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Ediscovery Noncustodial Data Source Release",
					"action": "Invoke action release",
					"description": "Release the non-custodial data source from the case.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources/{{$parameter[\"ediscoveryNoncustodialDataSource-id\"]}}/microsoft.graph.security.release"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Ediscovery Noncustodial Data Source Remove Hold",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Ediscovery Noncustodial Data Source Remove Hold",
					"action": "Invoke action removeHold",
					"description": "Start the process of removing hold from eDiscovery non-custodial data sources. After the operation is created, you can get the status by retrieving the `Location` parameter from the response headers. The location provides a URL that will return an eDiscoveryHoldOperation object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources/{{$parameter[\"ediscoveryNoncustodialDataSource-id\"]}}/microsoft.graph.security.removeHold"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Ediscovery Noncustodial Data Source Update Index",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Ediscovery Noncustodial Data Source Update Index",
					"action": "Invoke action updateIndex",
					"description": "Trigger an indexOperation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/noncustodialDataSources/{{$parameter[\"ediscoveryNoncustodialDataSource-id\"]}}/microsoft.graph.security.updateIndex"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Add To Review Set",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Add To Review Set",
					"action": "Invoke action addToReviewSet",
					"description": "Start the process of adding a collection from Microsoft 365 services to a review set. After the operation is created, you can get the status of the operation by retrieving the `Location` parameter from the response headers. The location provides a URL that will return a Add to review set operation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/microsoft.graph.security.addToReviewSet"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Export",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Export",
					"action": "Invoke action export",
					"description": "Initiate an export from a **reviewSet**.  For details, see Export documents from a review set in eDiscovery (Premium).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/microsoft.graph.security.export"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Apply Tags",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Apply Tags",
					"action": "Invoke action applyTags",
					"description": "Apply tags to files in an eDiscovery review set. For details, see Tag documents in a review set in eDiscovery.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/queries/{{$parameter[\"ediscoveryReviewSetQuery-id\"]}}/microsoft.graph.security.applyTags"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Export",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Export",
					"action": "Invoke action export",
					"description": "Initiate an export from a **reviewSet** query.  For details, see Export documents from a review set in eDiscovery (Premium).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/reviewSets/{{$parameter[\"ediscoveryReviewSet-id\"]}}/queries/{{$parameter[\"ediscoveryReviewSetQuery-id\"]}}/microsoft.graph.security.export"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Searches Ediscovery Search Estimate Statistics",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Searches Ediscovery Search Estimate Statistics",
					"action": "Invoke action estimateStatistics",
					"description": "Run an estimate of the number of emails and documents in the eDiscovery search. To learn more about searches in eDiscovery, see Collect data for a case in eDiscovery (Premium).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}/microsoft.graph.security.estimateStatistics"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Searches Ediscovery Search Purge Data",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Searches Ediscovery Search Purge Data",
					"action": "Invoke action purgeData",
					"description": "Delete Microsoft Teams messages contained in a eDiscovery search.  You can collect and purge the following categories of Teams content:\n- **Teams 1:1 chats** - Chat messages, posts, and attachments shared in a Teams conversation between two people. Teams 1:1 chats are also called *conversations*.\n- **Teams group chats** - Chat messages, posts, and attachments shared in a Teams conversation between three or more people. Also called *1:N* chats or *group conversations*.\n- **Teams channels** - Chat messages, posts, replies, and attachments shared in a standard Teams channel.\n- **Private channels** - Message posts, replies, and attachments shared in a private Teams channel.\n- **Shared channels** - Message posts, replies, and attachments shared in a shared Teams channel. For more information about purging Teams messages, see:\n- eDiscovery solution series: Data spillage scenario - Search and purge\n- eDiscovery (Premium) workflow for content in Microsoft Teams ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/searches/{{$parameter[\"ediscoverySearch-id\"]}}/microsoft.graph.security.purgeData"
						}
					}
				},
				{
					"name": "Security Cases Ediscovery Cases Ediscovery Case Settings Reset To Default",
					"value": "Security Cases Ediscovery Cases Ediscovery Case Settings Reset To Default",
					"action": "Invoke action resetToDefault",
					"description": "Reset a caseSettings object to the default values.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cases/ediscoveryCases/{{$parameter[\"ediscoveryCase-id\"]}}/settings/microsoft.graph.security.resetToDefault"
						}
					}
				},
				{
					"name": "Security Information Protection Sensitivity Labels Evaluate Application",
					"value": "Security Information Protection Sensitivity Labels Evaluate Application",
					"action": "Invoke action evaluateApplication",
					"description": "Compute the sensitivity label that should be applied and return the set of actions that must be taken to correctly label the information. This API is useful when a label should be set manually or explicitly by a user or service, rather than automatically based on file contents. Given contentInfo, which includes existing content metadata key-value pairs, and labelingOptions as an input, the API returns an informationProtectionAction object that contains one of more of the following: ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/informationProtection/sensitivityLabels/microsoft.graph.security.evaluateApplication"
						}
					}
				},
				{
					"name": "Security Information Protection Sensitivity Labels Evaluate Classification Results",
					"value": "Security Information Protection Sensitivity Labels Evaluate Classification Results",
					"action": "Invoke action evaluateClassificationResults",
					"description": "Use the classification results to compute the sensitivity label that should be applied and return the set of actions that must be taken to correctly label the information. This API is useful when a label should be set automatically based on classification of the file contents, rather than labeled directly by a user or service.  To evaluate based on classification results, provide the contentInfo, which includes existing content metadata key-value pairs, and classification results. The API returns an informationProtectionAction that contains one of more of the following:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/informationProtection/sensitivityLabels/microsoft.graph.security.evaluateClassificationResults"
						}
					}
				},
				{
					"name": "Security Information Protection Sensitivity Labels Evaluate Removal",
					"value": "Security Information Protection Sensitivity Labels Evaluate Removal",
					"action": "Invoke action evaluateRemoval",
					"description": "Indicate to the consuming application what actions it should take to remove the label information. Given contentInfo as an input, which includes existing content metadata key-value pairs, the API returns an informationProtectionAction that contains some combination of one or more of the following: ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/informationProtection/sensitivityLabels/microsoft.graph.security.evaluateRemoval"
						}
					}
				},
				{
					"name": "Security Information Protection Sensitivity Labels Extract Content Label",
					"value": "Security Information Protection Sensitivity Labels Extract Content Label",
					"action": "Invoke action extractContentLabel",
					"description": "Use the metadata that exists on an already-labeled piece of information to resolve the metadata to a specific sensitivity label. The contentInfo input is resolved to informationProtectionContentLabel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/informationProtection/sensitivityLabels/microsoft.graph.security.extractContentLabel"
						}
					}
				},
				{
					"name": "Security Run Hunting Query",
					"value": "Security Run Hunting Query",
					"action": "Invoke action runHuntingQuery",
					"description": "Invoke action runHuntingQuery",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/microsoft.graph.security.runHuntingQuery"
						}
					}
				},
				{
					"name": "Security Security Actions Security Action Cancel Security Action",
					"value": "Security Security Actions Security Action Cancel Security Action",
					"action": "Invoke action cancelSecurityAction",
					"description": "Cancel a security operation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/securityActions/{{$parameter[\"securityAction-id\"]}}/microsoft.graph.cancelSecurityAction"
						}
					}
				},
				{
					"name": "Security Ti Indicators Delete Ti Indicators",
					"value": "Security Ti Indicators Delete Ti Indicators",
					"action": "Invoke action deleteTiIndicators",
					"description": "Delete multiple threat intelligence (TI) indicators in one request instead of multiple requests.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/tiIndicators/microsoft.graph.deleteTiIndicators"
						}
					}
				},
				{
					"name": "Security Ti Indicators Delete Ti Indicators By External Id",
					"value": "Security Ti Indicators Delete Ti Indicators By External Id",
					"action": "Invoke action deleteTiIndicatorsByExternalId",
					"description": "Delete multiple threat intelligence (TI) indicators in one request instead of multiple requests, when the request contains external IDs instead of IDs.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/tiIndicators/microsoft.graph.deleteTiIndicatorsByExternalId"
						}
					}
				},
				{
					"name": "Security Ti Indicators Submit Ti Indicators",
					"value": "Security Ti Indicators Submit Ti Indicators",
					"action": "Invoke action submitTiIndicators",
					"description": "Upload multiple threat intelligence (TI) indicators in one request instead of multiple requests.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/tiIndicators/microsoft.graph.submitTiIndicators"
						}
					}
				},
				{
					"name": "Security Ti Indicators Update Ti Indicators",
					"value": "Security Ti Indicators Update Ti Indicators",
					"action": "Invoke action updateTiIndicators",
					"description": "Update multiple threat intelligence (TI) indicators in one request instead of multiple requests.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/tiIndicators/microsoft.graph.updateTiIndicators"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /security/alerts/microsoft.graph.updateAlerts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Alerts Update Alerts"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  {\n    \"alertDetections\": [\n      {}\n    ],\n    \"cloudAppStates\": [\n      {}\n    ],\n    \"comments\": [\n      null\n    ],\n    \"detectionIds\": [\n      null\n    ],\n    \"fileStates\": [\n      {\n        \"fileHash\": {}\n      }\n    ],\n    \"historyStates\": [\n      {\n        \"comments\": [\n          null\n        ],\n        \"feedback\": {}\n      }\n    ],\n    \"hostStates\": [\n      {}\n    ],\n    \"incidentIds\": [\n      null\n    ],\n    \"investigationSecurityStates\": [\n      {}\n    ],\n    \"malwareStates\": [\n      {}\n    ],\n    \"messageSecurityStates\": [\n      {}\n    ],\n    \"networkConnections\": [\n      {}\n    ],\n    \"processes\": [\n      {\n        \"fileHash\": {}\n      }\n    ],\n    \"recommendedActions\": [\n      null\n    ],\n    \"registryKeyStates\": [\n      {}\n    ],\n    \"securityResources\": [\n      {}\n    ],\n    \"sourceMaterials\": [\n      null\n    ],\n    \"status\": {},\n    \"tags\": [\n      null\n    ],\n    \"triggers\": [\n      {}\n    ],\n    \"uriClickSecurityStates\": [\n      {}\n    ],\n    \"userStates\": [\n      {}\n    ],\n    \"vendorInformation\": {},\n    \"vulnerabilityStates\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Alerts Update Alerts"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/microsoft.graph.security.applyHold",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Custodians Apply Hold"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Custodians Apply Hold"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/microsoft.graph.security.removeHold",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Custodians Remove Hold"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Custodians Remove Hold"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/microsoft.graph.security.activate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Activate"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/microsoft.graph.security.applyHold",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Apply Hold"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/microsoft.graph.security.release",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Release"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/microsoft.graph.security.removeHold",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Remove Hold"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/custodians/{ediscoveryCustodian-id}/microsoft.graph.security.updateIndex",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Custodians Ediscovery Custodian Update Index"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/microsoft.graph.security.close",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Close"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/microsoft.graph.security.reopen",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Reopen"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/microsoft.graph.security.applyHold",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Apply Hold"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Apply Hold"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/microsoft.graph.security.removeHold",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Remove Hold"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Remove Hold"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/microsoft.graph.security.applyHold",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Ediscovery Noncustodial Data Source Apply Hold"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/microsoft.graph.security.release",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Ediscovery Noncustodial Data Source Release"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/microsoft.graph.security.removeHold",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Ediscovery Noncustodial Data Source Remove Hold"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/noncustodialDataSources/{ediscoveryNoncustodialDataSource-id}/microsoft.graph.security.updateIndex",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Noncustodial Data Sources Ediscovery Noncustodial Data Source Update Index"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/microsoft.graph.security.addToReviewSet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Add To Review Set"
					]
				}
			}
		},
		{
			"displayName": "Additional Data Options",
			"name": "additionalDataOptions",
			"type": "options",
			"default": "allVersions",
			"options": [
				{
					"name": "All Versions",
					"value": "allVersions"
				},
				{
					"name": "Linked Files",
					"value": "linkedFiles"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "additionalDataOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Add To Review Set"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"type": "string",
			"default": {
				"createdBy": {
					"application": {},
					"device": {},
					"user": {}
				},
				"lastModifiedBy": {}
			},
			"routing": {
				"send": {
					"property": "search",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Add To Review Set"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/microsoft.graph.security.export",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Export"
					]
				}
			}
		},
		{
			"displayName": "Azure Blob Container",
			"name": "azureBlobContainer",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "azureBlobContainer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Export"
					]
				}
			}
		},
		{
			"displayName": "Azure Blob Token",
			"name": "azureBlobToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "azureBlobToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Export"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Export"
					]
				}
			}
		},
		{
			"displayName": "Export Options",
			"name": "exportOptions",
			"type": "options",
			"default": "originalFiles",
			"options": [
				{
					"name": "Original Files",
					"value": "originalFiles"
				},
				{
					"name": "Text",
					"value": "text"
				},
				{
					"name": "Pdf Replacement",
					"value": "pdfReplacement"
				},
				{
					"name": "File Info",
					"value": "fileInfo"
				},
				{
					"name": "Tags",
					"value": "tags"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "exportOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Export"
					]
				}
			}
		},
		{
			"displayName": "Export Structure",
			"name": "exportStructure",
			"type": "options",
			"default": "none",
			"options": [
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Directory",
					"value": "directory"
				},
				{
					"name": "Pst",
					"value": "pst"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "exportStructure",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Export"
					]
				}
			}
		},
		{
			"displayName": "Output Name",
			"name": "outputName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "outputName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Export"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/queries/{ediscoveryReviewSetQuery-id}/microsoft.graph.security.applyTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Apply Tags"
					]
				}
			}
		},
		{
			"displayName": "Tags To Add",
			"name": "tagsToAdd",
			"type": "json",
			"default": "[\n  {\n    \"@odata.type\": \"#microsoft.graph.security.ediscoveryReviewTag\",\n    \"createdBy\": {\n      \"application\": {},\n      \"device\": {},\n      \"user\": {}\n    },\n    \"childTags\": [\n      {}\n    ],\n    \"parent\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "tagsToAdd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Apply Tags"
					]
				}
			}
		},
		{
			"displayName": "Tags To Remove",
			"name": "tagsToRemove",
			"type": "json",
			"default": "[\n  {\n    \"@odata.type\": \"#microsoft.graph.security.ediscoveryReviewTag\",\n    \"createdBy\": {\n      \"application\": {},\n      \"device\": {},\n      \"user\": {}\n    },\n    \"childTags\": [\n      {}\n    ],\n    \"parent\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "tagsToRemove",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Apply Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/reviewSets/{ediscoveryReviewSet-id}/queries/{ediscoveryReviewSetQuery-id}/microsoft.graph.security.export",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Export"
					]
				}
			}
		},
		{
			"displayName": "Azure Blob Container",
			"name": "azureBlobContainer",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "azureBlobContainer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Export"
					]
				}
			}
		},
		{
			"displayName": "Azure Blob Token",
			"name": "azureBlobToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "azureBlobToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Export"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Export"
					]
				}
			}
		},
		{
			"displayName": "Export Options",
			"name": "exportOptions",
			"type": "options",
			"default": "originalFiles",
			"options": [
				{
					"name": "Original Files",
					"value": "originalFiles"
				},
				{
					"name": "Text",
					"value": "text"
				},
				{
					"name": "Pdf Replacement",
					"value": "pdfReplacement"
				},
				{
					"name": "File Info",
					"value": "fileInfo"
				},
				{
					"name": "Tags",
					"value": "tags"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "exportOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Export"
					]
				}
			}
		},
		{
			"displayName": "Export Structure",
			"name": "exportStructure",
			"type": "options",
			"default": "none",
			"options": [
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Directory",
					"value": "directory"
				},
				{
					"name": "Pst",
					"value": "pst"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "exportStructure",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Export"
					]
				}
			}
		},
		{
			"displayName": "Output Name",
			"name": "outputName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "outputName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Review Sets Ediscovery Review Set Queries Ediscovery Review Set Query Export"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/microsoft.graph.security.estimateStatistics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Searches Ediscovery Search Estimate Statistics"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/searches/{ediscoverySearch-id}/microsoft.graph.security.purgeData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Searches Ediscovery Search Purge Data"
					]
				}
			}
		},
		{
			"displayName": "Purge Areas",
			"name": "purgeAreas",
			"type": "options",
			"default": "mailboxes",
			"options": [
				{
					"name": "Mailboxes",
					"value": "mailboxes"
				},
				{
					"name": "Teams Messages",
					"value": "teamsMessages"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "purgeAreas",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Searches Ediscovery Search Purge Data"
					]
				}
			}
		},
		{
			"displayName": "Purge Type",
			"name": "purgeType",
			"type": "options",
			"default": "recoverable",
			"options": [
				{
					"name": "Recoverable",
					"value": "recoverable"
				},
				{
					"name": "Permanently Deleted",
					"value": "permanentlyDeleted"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "purgeType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Searches Ediscovery Search Purge Data"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cases/ediscoveryCases/{ediscoveryCase-id}/settings/microsoft.graph.security.resetToDefault",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Cases Ediscovery Cases Ediscovery Case Settings Reset To Default"
					]
				}
			}
		},
		{
			"displayName": "POST /security/informationProtection/sensitivityLabels/microsoft.graph.security.evaluateApplication",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Evaluate Application"
					]
				}
			}
		},
		{
			"displayName": "Content Info",
			"name": "contentInfo",
			"type": "json",
			"default": "{\n  \"metadata\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "contentInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Evaluate Application"
					]
				}
			}
		},
		{
			"displayName": "Labeling Options",
			"name": "labelingOptions",
			"type": "json",
			"default": "{\n  \"downgradeJustification\": {},\n  \"extendedProperties\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "labelingOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Evaluate Application"
					]
				}
			}
		},
		{
			"displayName": "POST /security/informationProtection/sensitivityLabels/microsoft.graph.security.evaluateClassificationResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Evaluate Classification Results"
					]
				}
			}
		},
		{
			"displayName": "Classification Results",
			"name": "classificationResults",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "classificationResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Evaluate Classification Results"
					]
				}
			}
		},
		{
			"displayName": "Content Info",
			"name": "contentInfo",
			"type": "json",
			"default": "{\n  \"metadata\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "contentInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Evaluate Classification Results"
					]
				}
			}
		},
		{
			"displayName": "POST /security/informationProtection/sensitivityLabels/microsoft.graph.security.evaluateRemoval",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Evaluate Removal"
					]
				}
			}
		},
		{
			"displayName": "Content Info",
			"name": "contentInfo",
			"type": "json",
			"default": "{\n  \"metadata\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "contentInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Evaluate Removal"
					]
				}
			}
		},
		{
			"displayName": "Downgrade Justification",
			"name": "downgradeJustification",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "downgradeJustification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Evaluate Removal"
					]
				}
			}
		},
		{
			"displayName": "POST /security/informationProtection/sensitivityLabels/microsoft.graph.security.extractContentLabel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Extract Content Label"
					]
				}
			}
		},
		{
			"displayName": "Content Info",
			"name": "contentInfo",
			"type": "json",
			"default": "{\n  \"metadata\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "contentInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Information Protection Sensitivity Labels Extract Content Label"
					]
				}
			}
		},
		{
			"displayName": "POST /security/microsoft.graph.security.runHuntingQuery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Run Hunting Query"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "query",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Run Hunting Query"
					]
				}
			}
		},
		{
			"displayName": "POST /security/securityActions/{securityAction-id}/microsoft.graph.cancelSecurityAction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Security Actions Security Action Cancel Security Action"
					]
				}
			}
		},
		{
			"displayName": "POST /security/tiIndicators/microsoft.graph.deleteTiIndicators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Ti Indicators Delete Ti Indicators"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Ti Indicators Delete Ti Indicators"
					]
				}
			}
		},
		{
			"displayName": "POST /security/tiIndicators/microsoft.graph.deleteTiIndicatorsByExternalId",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Ti Indicators Delete Ti Indicators By External Id"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Ti Indicators Delete Ti Indicators By External Id"
					]
				}
			}
		},
		{
			"displayName": "POST /security/tiIndicators/microsoft.graph.submitTiIndicators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Ti Indicators Submit Ti Indicators"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  {\n    \"activityGroupNames\": [\n      null\n    ],\n    \"killChain\": [\n      null\n    ],\n    \"malwareFamilyNames\": [\n      null\n    ],\n    \"tags\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Ti Indicators Submit Ti Indicators"
					]
				}
			}
		},
		{
			"displayName": "POST /security/tiIndicators/microsoft.graph.updateTiIndicators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Ti Indicators Update Ti Indicators"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  {\n    \"activityGroupNames\": [\n      null\n    ],\n    \"killChain\": [\n      null\n    ],\n    \"malwareFamilyNames\": [\n      null\n    ],\n    \"tags\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Actions"
					],
					"operation": [
						"Security Ti Indicators Update Ti Indicators"
					]
				}
			}
		},
];
